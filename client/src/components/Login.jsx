import React, { useContext } from "react";
import { handleLogin } from "../utils/api";
import { AuthContext } from "../store/authContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Login = ({ setRegister }) => {
  const { login } = useContext(AuthContext);
  const validationSchema = yup.object({
    emailOrUsername: yup
      .string()
      .email("Not a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password is atleast 6 characters long!"),
  });
  return (
    <div data-aos="fade-left" data-aos-duration="1500">
      <Formik
        initialValues={{ password: "", emailOrUsername: "" }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          const result = await handleLogin(data);
          if (result.success) {
            console.log("logged in");
            login(result.token);
          }
          setSubmitting(false);
        }}
      >
        {(values, errors, touched, handleChange, isSubmitting) => {
          return (
            <Form className="flex flex-col px-8 lg:px-20 py-10 max-w-xl border-2 border-secondary m-auto rounded-lg h-full shadow-xl">
              <h1 className="text-center w-full mx-auto p-4 mb-6 text-5xl text-secondary">
                Login To <span className="text-red-600">Vital+</span>
              </h1>
              <label htmlFor="email" className="">
                Email
                <Field
                  // placeholder="Email"
                  type="email"
                  name="emailOrUsername"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="email" />
              <label htmlFor="password" className="mt-4">
                Password
                <Field
                  // placeholder="Password"
                  type="password"
                  name="password"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="password" />
              <button
                disabled={isSubmitting}
                type="submit"
                className="actionBtn self-center mt-4"
              >
                {isSubmitting ? "loading" : "Log In"}
              </button>
              <footer className="cursor-default text-center mt-2">
                Don't have an account?&nbsp;
                <span
                  onClick={() => {
                    setRegister(true);
                  }}
                  className="font-bold hover:underline cursor-pointer"
                >
                  Register
                </span>
              </footer>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

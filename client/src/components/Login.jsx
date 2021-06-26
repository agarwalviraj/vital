import React, { useContext } from "react";
import { handleLogin } from "../utils/api";
import { AuthContext } from "../store/authContext";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const handleError = (type, errors, touched) => {
  if (touched && errors && type)
    if (touched[type] && errors[type]) {
      return (
        <span className="text-red-500 font-medium text-sm mt-1">
          {errors[type]}
        </span>
      );
    }
};

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
    <div>
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
            <Form className="flex flex-col px-4 md:px-20 py-10 max-w-xl border-2 border-primary m-auto rounded-lg">
              <Field
                placeholder="Email"
                type="email"
                name="emailOrUsername"
                className="textInput"
              ></Field>
              {handleError("emailOrUsername", errors, touched)}
              <Field
                placeholder="Password"
                type="password"
                name="password"
                className="textInput"
              ></Field>
              {handleError("password", errors, touched)}
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

import AOS from "aos";
import "aos/dist/aos.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
import { AuthContext } from "../store/authContext";
import { handleRegister } from "../utils/api";
AOS.init();

const Register = ({ setRegister }) => {
  const { login } = useContext(AuthContext);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Not a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password is atleast 6 characters long!"),
    username: yup
      .string()
      .required("Username is required")
      .min(6, "Password is atleast 6 characters long!"),
    name: yup.string("name is required").required(),
    qualifications: yup.string().required("Qualifications is required"),
    specialization: yup.string().required("Specialization is required"),
    description: yup.string().required("Description is required"),
    hospitalName: yup.string().required("Hospital Name is required"),
  });
  return (
    <div data-aos="fade-left" data-aos-duration="1500">
      <Formik
        initialValues={{
          password: "",
          email: "",
          username: "",
          name: "",
          qualifications: "",
          description: "",
          hospitalName: "",
          specialization: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          const result = await handleRegister(data);
          if (result.success) {
            console.log("logged in");
            login(result.token);
          }
          setSubmitting(false);
        }}
      >
        {(values, errors, touched, handleChange, isSubmitting) => {
          return (
            <Form className="flex flex-col px-8 lg:px-20 py-10 max-w-xl border-2 border-secondary m-auto rounded-lg h-full">
              <h1 className="text-center w-full mx-auto p-4 mb-6 text-5xl text-secondary">
                Register To <span className="text-red-600">Vital+</span>
              </h1>
              <label htmlFor="email" className="">
                Email
                <Field type="email" name="email" className="textInput"></Field>
              </label>
              <ErrorMessage name="email" />
              <label htmlFor="name" className="mt-4">
                Name
                <Field type="text" name="name" className="textInput"></Field>
              </label>
              <ErrorMessage name="name" />
              <label htmlFor="username" className="mt-4">
                Username
                <Field
                  type="text"
                  name="username"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="username" />
              {/* {("username", errors, touched)} */}
              <label htmlFor="password" className="mt-4">
                Password
                <Field
                  type="password"
                  name="password"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="password" />
              <label htmlFor="qualifications" className="mt-4">
                Qualifications
                <Field
                  type="text"
                  name="qualifications"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="qualifications" />
              <label htmlFor="specializations" className="mt-4">
                Specialization
                <Field
                  type="text"
                  name="specialization"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="specialization" />
              <label htmlFor="hospitalName" className="mt-4">
                Hospital Name
                <Field
                  type="text"
                  name="hospitalName"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="hospitalName" />
              <label htmlFor="description" className="mt-4">
                Description
                <Field
                  type="text"
                  name="description"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="description" />
              <button
                disabled={isSubmitting}
                type="submit"
                className="actionBtn self-center mt-4"
              >
                {isSubmitting ? "loading" : "Register"}
              </button>
              <footer className="cursor-default text-center mt-2">
                Already have an account?&nbsp;
                <span
                  onClick={() => {
                    setRegister(false);
                  }}
                  className="font-bold hover:underline cursor-pointer"
                >
                  Login
                </span>
              </footer>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;

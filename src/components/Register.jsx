import React, { useContext } from "react";
import { handleLogin, handleRegister } from "../utils/api";
import { AuthContext } from "../store/authContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const Register = ({ setRegister }) => {
  const handleErrors = (type, errors, touched) => {
    if (touched && errors && type)
      if (touched[type] && errors[type]) {
        return (
          <span className="text-red-500 font-medium text-sm mt-1 capitalize">
            {errors[type]}
          </span>
        );
      }
  };

  const { login } = useContext(AuthContext);
  const history = useHistory();
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
    <div>
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
            <Form className="flex flex-col px-4 md:px-20 py-10 max-w-xl border-2 border-secondary m-auto rounded-lg">
              <label htmlFor="email" className="">
                Email
                <Field
                  type="email"
                  name="email"
                  className="textInput"
                ></Field>
              </label>
              <ErrorMessage name="email" />
              <Field
                placeholder="Name"
                type="text"
                name="name"
                className="textInput"
              ></Field>
              <ErrorMessage name="name" />
              <Field
                placeholder="Username"
                type="text"
                name="username"
                className="textInput"
              ></Field>
              <ErrorMessage name="username" />
              {/* {("username", errors, touched)} */}
              <Field
                placeholder="Password"
                type="password"
                name="password"
                className="textInput"
              ></Field>
              <ErrorMessage name="password" />
              <Field
                placeholder="Qualifications"
                type="text"
                name="qualifications"
                className="textInput"
              ></Field>
              <ErrorMessage name="qualifications" />
              <Field
                placeholder="Specializations"
                type="text"
                name="specialization"
                className="textInput"
              ></Field>
              <ErrorMessage name="specialization" />
              <Field
                placeholder="Hospital Name"
                type="text"
                name="hospitalName"
                className="textInput"
              ></Field>
              <ErrorMessage name="hospitalName" />
              <Field
                placeholder="Description"
                type="text"
                name="description"
                className="textInput"
              ></Field>
              <ErrorMessage name="description" />
              <button
                disabled={isSubmitting}
                type="submit"
                className="actionBtn self-center mt-4"
              >
                {isSubmitting ? "loading" : "Log In"}
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

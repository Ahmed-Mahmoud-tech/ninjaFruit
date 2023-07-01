import { useState } from "react";
// import useRequest from "../../../../axios/apis/useRequest";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Wrapper from "./Auth.styled";
import useRequest from "../../hooks/apis/useRequest";
import user from "../../store/slices/user";
// import { useDispatch } from "react-redux";
// import { addUserData } from "../../../../store/slices/user";
// import { changePop } from "../../../../store/slices/style";
// import { setCookie } from "@/utilities/main";
const Auth = () => {
  //   const dispatch = useDispatch();
  //   const { signIn, signUp } = useRequest();
  const [login, setLogin] = useState(true);

  const { login: loginRequest } = useRequest();

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
    pwd: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  return (
    <Wrapper>
      <div className="title"> {login ? "singIn" : "singUp"} </div>

      <Formik
        initialValues={{ user: "ggg", pwd: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          loginRequest(values);
          //   if (login) {
          //     const res = await signIn(values);
          //     if (res) {
          //       localStorage.setItem("token", res.data.userInfo.accessToken);
          //       setCookie("token", `Bearer ${res.data.userInfo.accessToken}`, 7);
          //       dispatch(addUserData(res.data.userInfo));
          //       dispatch(changePop(""));
          //     }
          //   } else {
          //     signUp(values);
          //   }
        }}>
        {() => (
          <Form action="">
            <Field name="user" placeholder="User Name" />
            <span className="ValidationErrorMessage">
              <ErrorMessage name="user" />
            </span>
            <Field type="password" name="pwd" placeholder="password" />
            <span className="ValidationErrorMessage">
              <ErrorMessage name="pwd" />
            </span>

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
      <div className="switchSec">
        <span style={{ opacity: login ? "1" : "0.5" }}>singIn</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              setLogin(!login);
            }}
          />
          <div className="slider round"></div>
        </label>
        <span style={{ opacity: login ? "0.5" : "1" }}>singUp</span>
      </div>
    </Wrapper>
  );
};

export default Auth;

// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const LoginForm = () => {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   // Define the initial form values
//   const initialValues = {
//     username: '',
//     password: '',
//   };

//   // Handle form submission
//   const handleSubmit = (values) => {
//     console.log('Form submitted:', values);
//   };

//   // Initialize formik
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formik.values.username}
//           onChange={formik.handleChange}
//         />
//         {formik.errors.username && formik.touched.username && (
//           <div>{formik.errors.username}</div>
//         )}
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//         />
//         {formik.errors.password && formik.touched.password && (
//           <div>{formik.errors.password}</div>
//         )}
//       </div>

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

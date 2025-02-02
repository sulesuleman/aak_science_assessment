import * as Yup from "yup";

export const signupFormValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is Required."),
  last_name: Yup.string().required("Last Name is Required."),
  username: Yup.string().required("Username is Required."),
  country: Yup.string().required("Country is Required."),
  user_type: Yup.string().required("UserType is Required."),
  email: Yup.string().email().required("Email is Required."),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});

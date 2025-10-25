import * as yup from "yup";

const registrationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Name must be at least 3 characters"),
  age: yup
    .number()
    .required("Age is required")
    .min(18, "You must be at least 18 years old")
    .max(99, "Age must be less than 100"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  gender: yup.string().required("Please select gender"),
  country: yup.string().required("Please select your country"),
  skills: yup.array().min(1, "Select at least one skill"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "Bio must be at least 10 characters"),
});

export default registrationSchema;

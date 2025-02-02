import React, { Fragment } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { useFormik } from "formik";

import { ISignup } from "../../../../types/models";
import { USER_TYPE_ENUM } from "../../../../types";
import { signupFormValidationSchema } from "../../../../utils/form-validation";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { isRegisterationInProcess } from "../../authSelectors";
import useToast from "../../../../hooks/useToast";
import { registerUser } from "../../authAction";
import { TextField } from "../../../../common/components";

const initialValues: ISignup = {
  user_type: USER_TYPE_ENUM.RESEARCHER,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  country: "",
  username: "",
};

const UserTypeOptions = [
  { value: USER_TYPE_ENUM.RESEARCHER, label: "Researcher" },
  { value: USER_TYPE_ENUM.INSTITUTION_STAFF, label: "Institution Staff" },
  { value: USER_TYPE_ENUM.INVESTOR, label: "Investor" },
  { value: USER_TYPE_ENUM.SERVICE_PROVIDER, label: "Service Provider" },
];

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const isFormSubmitting = useAppSelector(isRegisterationInProcess);

  const { toast, onDismiss, setToast } = useToast();

  const onSubmit = async (data: ISignup) => {
    try {
      const response = await dispatch(registerUser(data)).unwrap();
      setToast((prev) => ({
        ...prev,
        message: response.message || "",
        visible: true,
      }));
      formik.resetForm();
      console.log("User signed in successfully");
    } catch (error: any) {
      setToast((prev) => ({
        ...prev,
        type: "danger",
        message: error || "",
        visible: true,
      }));
      console.error("Error signing up user: ", error);
    }
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validationSchema: signupFormValidationSchema,
    onSubmit,
  });

  return (
    <Fragment>
      <Alert color={toast.type} isOpen={toast.visible} toggle={onDismiss}>
        {toast.message}
      </Alert>

      <Form onSubmit={formik.handleSubmit}>
        <h1 className="heading mb-2">Signup</h1>
        <div className="divider"></div>
        <Row>
          <Col md={6}>
            <TextField
              id="first_name"
              name="first_name"
              placeholder="First Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.first_name}
              invalid={Boolean(formik.errors.first_name)}
              errorMessage={formik.errors.first_name}
            />
          </Col>
          <Col md={6}>
            <TextField
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.last_name}
              invalid={Boolean(formik.errors.last_name)}
              errorMessage={formik.errors.last_name}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TextField
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              invalid={Boolean(formik.errors.email)}
              errorMessage={formik.errors.email}
            />
          </Col>
          <Col md={6}>
            <TextField
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              invalid={Boolean(formik.errors.password)}
              errorMessage={formik.errors.password}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TextField
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              invalid={Boolean(formik.errors.username)}
              errorMessage={formik.errors.username}
            />
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="user_type">UserType</Label>
              <Input
                id="user_type"
                name="user_type"
                type="select"
                onChange={formik.handleChange}
                value={formik.values.user_type}
                invalid={Boolean(formik.errors.user_type)}
              >
                {UserTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>
              {formik.errors.user_type && (
                <FormFeedback>{formik.errors.user_type}</FormFeedback>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TextField
              id="country"
              name="country"
              placeholder="Country"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.country}
              invalid={Boolean(formik.errors.country)}
              errorMessage={formik.errors.country}
            />
          </Col>
        </Row>
        <Button type="submit" color="primary" disabled={isFormSubmitting}>
          {isFormSubmitting ? (
            <>
              Signing up <Spinner size="sm" color="white" />
            </>
          ) : (
            "Sign up"
          )}
        </Button>
      </Form>
    </Fragment>
  );
};

export default SignupForm;

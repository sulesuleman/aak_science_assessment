import React from "react";
import { Card, Container } from "reactstrap";

import SignupForm from "./components/signupForm";
import "./styles.css";

const Signup = () => {
  return (
    <Container className="section section__signup">
      <Card className="signup__card container-sm shadow border-1">
        <SignupForm />
      </Card>
    </Container>
  );
};

export default Signup;

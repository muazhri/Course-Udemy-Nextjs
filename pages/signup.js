import { text } from "express";
import React, { useState, useEffect, useRef } from "react";
import { Form, Message, Segment } from "semantic-ui-react";
import {
  HeaderMeassage,
  FooterMessage,
} from "../components/Common/WelcomeMessage";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });

  const { name, email, password, bio } = user;
  // const handleChange = (e) => {
  //   const {name, value}= e.target
  //   setUser(prev => ({...prev, [name]:value}));

  // };

  const [showSocialLinks, setShowSocialLink] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  const [userName, setUserName] = useState("");
  const [userNameLoading, setUserNameLoading] = useState(false);
  const [userNameAvailable, setUserNameAvailable] = useState(false);

  const handleSubmit = (e) => e.preventDefault();
  return (
    <>
      <HeaderMeassage />

      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
        <Segment>
          <Form.input
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            change={handleChange}
            fluid
            icon="user"
            iconPosition="left"
          />
          <Form.input
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            change={handleChange}
            fluid
            icon="envelope"
            iconPosition="left"
            type="email"
          />
          <Form.input
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            change={handleChange}
            fluid
            icon={{
              name:"eye",
              circular:true,
              link:true,
              onclick:() => setShowPassword(!showPassword )
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
        </Segment>
      </Form>

      <FooterMessage />
    </>
  );
}

export default Signup;

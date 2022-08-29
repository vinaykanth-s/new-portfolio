import React, { useState } from "react";
import emailjs from "emailjs-com";
import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    console.log("inside send email");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_smqnb9h", //service id
        "template_luql7ys", //template id
        e.target,
        "70uZ_gAKUBYhC-mMR"
      )
      .then(
        (result) => {
          console.log("res", result.text);
        },
        (error) => {
          console.log("err", error.text);
        }
      );
    // e.target.reset();
  };
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      {console.log({ email, name, message })}
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className="submitButton" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

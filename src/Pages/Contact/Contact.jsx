// ContactForm.js
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { motion } from "framer-motion";
import { slideIn } from "../../Components/utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const public_key ="-g4yWitmwmMo2IDN9";
    const templateID="template_scf293i";
    const serviceID="service_xhm81c5";
    
    const templateParams={
        from_name: user.name,
        from_email: user.email,
        to_name:'Dimple',
        message:user.message
    }
    
    emailjs.send(serviceID,templateID,templateParams,public_key)
.then(
    (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setLoading(false);
        setUser({ name: "", email: "", message: "" });
    },
    (error) => {
        console.error("Error sending email:", error);
        setLoading(false);
    });
}



    return (
      <div className="form-container">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="form"
        >
            <p>Get in touch</p>
            <h3>Contact</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your good name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="what's your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={user.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
            </form>
        </motion.div>
      </div>
    );
  };


export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section className="form-container">
      <header>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>
      <form>
        <div className="two">
          <div className="first">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="second">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div className="check">
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agreee">
            You agree to providing your data to Yahaya Abdullah Danjuma who may
            contact you.
          </label>
        </div>
        <div>
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

import {
  useState
} from "react";

function Contact() {

  const [form,
    setForm] =
      useState({
        name: "",
        email: "",
        message: ""
      });

  const submitHandler = (e) => {
    e.preventDefault();

    alert(
      "Message Submitted"
    );
  };

  return (
    <section
      id="contact"
      className="container mt-5"
    >
      <h2>Contact</h2>

      <form
        onSubmit={submitHandler}
      >

        <input
          className="form-control"
          placeholder="Name"
        />

        <br />

        <input
          className="form-control"
          placeholder="Email"
        />

        <br />

        <textarea
          className="form-control"
          placeholder="Message"
        />

        <br />

        <button
          className="btn btn-primary"
        >
          Send
        </button>

      </form>
    </section>
  );
}

export default Contact;
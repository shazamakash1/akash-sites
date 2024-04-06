import { useState } from "react";
// import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  //using states
  const [contact, setContact] = useState(defaultContactFormData);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  //handling submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // const serviceId = import.meta.env.VITE_SERVICE_ID;
    // const templateId = import.meta.env.VITE_TEMPLATE_ID;
    // const publicKey = import.meta.env.VITE_PUBLIC_ID;

    const serviceId = "service_d338xfu";
    const templateId = "template_gn8qa4x";
    const publicKey = "pRN8bXS7XeXofAakU";

    const templateParam = {
      from_name: contact.username,
      from_email: contact.email,
      to_name: "Manirujjaman Akash",
      message: contact.message,
    };

    emailjs
      .send(serviceId, templateId, templateParam, publicKey)
      .then((res) => {
        toast.success("Message Send Successfully");
        console.log(res);
        setContact(defaultContactFormData);
      })
      .catch((e) => {
        toast.error("Couldn't send message, please contact Administrator");
        console.log(e);
      });
  };

  // try {
  //   const response = await fetch(`${API}/api/form/contact`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(contact),
  //   });

  //   if (response.ok) {
  //     setContact(defaultContactFormData);
  //     const data = await response.json();
  //     // console.log("JSON Data -> ",data);
  //     toast.success("Message Send Successfully");
  //   }
  // } catch (error) {
  //   toast.error("Message Not send");
  // }
  // };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>

        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="we are always ready to help"
              height="500"
              width="500"
            />
          </div>

          {/* contact form content */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.
            0814581452314!2d88.3777058!3d22.
            725213500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x39f89ba8e3e0d97f%3A0x460d83e2efaaa38!
            2sKhardah%20Railway%20Station%20(Via%20Main%20Line)
            !5e0!3m2!1sen!2sin!4v1711180943904!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

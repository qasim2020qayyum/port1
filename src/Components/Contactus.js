import React from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const myFunction = () => {
    alert("I am an alert box!");
  }; 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qasim1",
        "template_bt43s7m",
        e.target,
        "user_vvDEJxSOKVZIY3AvAEISp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    //   e.alert("Thanks for contact us. we will get back soon through your given email adress")
  };

  return (
    <div>
      <div className="parallex1">
        <div className="contact-foam">
          <div className="contact-foam-1">
            <h4>Send Message Us</h4>
            <h5 style={{ color: "#0078ff" }}>_________</h5>

            <form onSubmit={sendEmail}>
              <div className="foam-name">
                <div className="foam-name-1">
                  <input
                    type="text"
                    className="foam-text"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div className="foam-name-1">
                  <input
                    type="email"
                    className="foam-text"
                    placeholder="email address"
                    name="email"
                  />
                </div>
                <div className="foam-name-1">
                  <input
                    type="text"
                    className="foam-text"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="foam-name-1">
                  <textarea
                    className="foam-text"
                    id=""
                    cols="24"
                    rows="8"
                    placeholder="Your Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="foam-name-1">
                  <input
                    type="submit"
                    onClick={()=> myFunction()}
                    className="btn btn-info btn-animated"
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="contact-foam-2">
            <h4>Get in Touch</h4>
            <h5 style={{ color: "#0078ff" }}>_________</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              porro recusandae nostrum laudantium rem fugiat natus aspernatur.
              Voluptatum blanditiis vitae eum inventore nam nisi? Odio id quam
              itaque vero quia.
            </p>
            <p>
              <img src="https://img.icons8.com/office/20/000000/worldwide-location--v1.png" />
              &nbsp; Lahore, Pakistan
            </p>
            <p>
              <img src="https://img.icons8.com/ultraviolet/20/000000/shake-phone.png" />
              &nbsp; +92 304 9075873
            </p>
            <p>
              <img src="https://img.icons8.com/ultraviolet/20/000000/email-open--v2.png" />
              &nbsp; qasim20qayyum@gmail.com{" "}
            </p>
            <div className="socialmedia">
                <a href="https://google.com" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/facebook-new.png"/></a>
                <a href="https://google.com" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/instagram-new.png"/></a>
                <a href="https://google.com" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/twitter-circled--v1.png"/></a>
                <a href="https://google.com" target="_blank"><img src="https://img.icons8.com/ultraviolet/30/000000/linkedin.png"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

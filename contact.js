import React from 'react';
import ContactForm from './contactForm';
class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <h1>CONTACT</h1>
        <br></br>
        <div>
          <br></br>
          <ContactForm />
        </div>
      </section>
    );
  }
}

export default Contact;

import React from 'react';
import Image from 'react-bootstrap/Image';
class About extends React.Component {
  render() {
    return (
      <section id="about">
        <h1>ABOUT US</h1>
        <article>
          <Image src="./images/austin.jpg" width="25%" height="50%" />
          <Image src="./images/austin.jpg" width="25%" height="50%" />
          <Image src="./images/austin.jpg" width="25%" height="50%" />
          <Image src="./images/austin.jpg" width="25%" height="50%" />

          <p>
            We develop the best secure applications. We ensure full security and
            robust features
          </p>
        </article>
      </section>
    );
  }
}

export default About;

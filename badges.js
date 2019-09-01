import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Badges extends React.Component {
  render() {
    return (
      <section id="badges">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="./images/plash.jpg" />
            <Card.Body>
              <Card.Title>Data Analysis</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/cement.jpg" />
            <Card.Body>
              <Card.Title>Application Infastructure</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/lash.jpg" />
            <Card.Body>
              <Card.Title>Website Development</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="./images/tran.jpg" />
            <Card.Body>
              <Card.Title>Mobile App Design</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardGroup>
      </section>
    );
  }
}

export default Badges;

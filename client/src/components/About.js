import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';
// import linkedinLogo from '../LinkedIn_logo_initials.png';

function About() {
  return (
    <CardGroup>
      <br />
      <div className="container">
        <Card>
          {/* <Card.Img
            variant="top"
            src={linkedinLogo}
          /> */}
          <Card.Body>
            <Card.Title>Linkedin</Card.Title>
            <Card.Text>
              <a href={'https://www.linkedin.com/in/johayer-rahman-chowdury/'}>
                Here is my Linkedin.
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" /> */}
          <Card.Body>
            <Card.Title>Github</Card.Title>
            <Card.Text>
              <a href={'https://github.com/JohayerChowdury/'}>
                Here is my Github.
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </CardGroup>
  );
}

export default About;

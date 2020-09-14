import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadNav from './HeadNav';
import BaseNav from './BaseNav';

function About() {
  return (
    <div className="About">
      <HeadNav />
      <Jumbotron className="about">
        <h1>SureSell:</h1>
        <p className="body">
          Welcome friend! If you're looking to improve the quantity and quality
          of your sales, then look no further! SureSell is a quick and easy way
          to reference any of your inventories' key selling features by creating
          visual cards you can quickly sort through, yourself!
          <br />
          <br />
          Your next customer will wonder if you used SureSell
        </p>
      </Jumbotron>
      <BaseNav />
    </div>
  );
}

export default About;

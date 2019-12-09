import React from 'react';
import styled from 'styled-components';
import './Landing.css';

const LandingBackground = styled.div`
  background: url('../../assets/images/geometric-nature-2.png') no repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
`;

function Landing() {
  return (
    <div className="landing">
      <h1>WAKE UP IT'S TIME TO SIN</h1>
      <button>CLICK ME</button>
    </div>
  )
}

export default Landing;
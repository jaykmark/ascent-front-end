import React from 'react';

import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <h1>TIME TO ASCEND</h1>
      <h2>Hone your skills. Track your progress.</h2>
      <a href="/register"><button className="btn btn-primary btn-callToAction">EXPLORE</button></a>
    </div>
  )
}

export default Landing;
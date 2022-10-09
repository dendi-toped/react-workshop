import React from 'react';
import './Home.css';

const MyComponent = () => {
  return <h1>My Component</h1>
}

const Home = () => {
  return (
    <div className="Home">
      <MyComponent/>
    </div>
  );
}

export default Home;

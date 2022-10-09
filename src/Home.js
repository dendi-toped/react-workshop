import React from 'react';
import './Home.css';

const MyComponent = (props) => {
  const {name, alamat} = props
  return (
    <>
      <h1>My Name is: {name}</h1>
      <p>I Live in: {alamat}</p>
    </>
  )
}

const Home = () => {
  return (
    <div className="Home">
      <MyComponent name="Mirza" alamat="Jakarta"/>
      <MyComponent name="Dimas" alamat="Surabaya"/>
    </div>
  );
}

export default Home;

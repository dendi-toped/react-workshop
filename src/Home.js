import React from 'react';
import './Home.css';

const MyComponent = (props) => {
  const {name, alamat, panggilan} = props;
  const nicknames = panggilan?.map(p => p).join(', ')
  return (
    <>
      <h1>My Name is: {name}</h1>
      <p>I Live in: {alamat}</p>
      {nicknames && <p>Panggilan ku: {nicknames}</p>}
    </>
  )
}

const Home = () => {
  return (
    <div className="Home">
      <MyComponent name="Mirza" alamat="Jakarta" panggilan={['mirza', 'za', 'chill']} />
      <MyComponent name="Dimas" alamat="Surabaya"/>
    </div>
  );
}

export default Home;

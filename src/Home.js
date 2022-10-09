import React, { useState } from 'react';
import './Home.css';

const MyComponent = (props) => {
  const {name, alamat, panggilan, count} = props;
  const nicknames = panggilan?.map(p => p).join(', ')
  return (
    <>
      <h1>My Name is: {name}</h1>
      <p>I Live in: {alamat}</p>
      {nicknames && <p>Panggilan ku: {nicknames}</p>}
      {count && `Sekarang ${count}`}
    </>
  )
}

const Home = () => {
  const [count, setCount] = useState(0)

  const tambahClickHandler = () => {
    setCount(prev => prev+1)
  }

  const kurangClickHandler = () => {
    setCount(prev => prev-1)
  }
  return (
    <div className="Home">
      <MyComponent name="Mirza" alamat="Jakarta" panggilan={['mirza', 'za', 'chill']} count={count} />
      <br/>
      <button onClick={tambahClickHandler}>Tambah</button>
      <br/>
      <br/>
      <button onClick={kurangClickHandler}>Kurang</button>
      
    </div>
  );
}

export default Home;

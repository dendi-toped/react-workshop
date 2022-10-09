import React, { useState } from 'react';
import './Home.css';

const DataFromApi = [
  {name: 'Mirza', age: 22, job: 'WPE', alamat: 'Jakarta'},
  {name: 'Apem', age: 22, job: 'PM', alamat: 'Jakarta'},
  {name: 'Tika', age: 22, job: 'SE-EP', alamat: 'Jakarta'}
]

const MyComponent = (props) => {
  const {name, alamat, panggilan, count, job} = props;
  const nicknames = panggilan?.map(p => p).join(', ')
  return (
    <>
      <h1>My Name is: {name}</h1>
      <p>I Live in: {alamat}</p>
      {nicknames && <p>Panggilan ku: {nicknames}</p>}
      {count && `Sekarang ${count}`}
      <p>My Job: {job}</p>
    </>
  )
}

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      {DataFromApi.map(datum => {
        return (
          <MyComponent 
            name={datum.name} 
            age={datum.age} 
            alamat={datum.alamat} 
            job={datum.job} 
          />
        )
      })}
    </div>
  );
}

export default Home;

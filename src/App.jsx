import React from 'react';
import './App.css';
import data from './data';
import Header from "./components/Header";
import Destination from "./components/Destination";

function App() {
  const destinations = data.map(destination => {
    return (
			<Destination
        destination={destination}
			/>
		);
  })

  return (
		<div className='container'>
			<Header />
			<section className='destinations'>{destinations}</section>
		</div>
	);
}

export default App;

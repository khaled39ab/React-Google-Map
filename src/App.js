import { useState } from 'react';
import './App.css';
import Direction from './components/direction/Direction';
import MyLocation from './components/myLocation/MyLocation';

function App() {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const displayDestination = e => {
    e.preventDefault();
    setOrigin = e.target.origin.value;
    setDestination = e.target.destination.value;
  }

  return (
    <div className="App">
      <form onSubmit={displayDestination}>
        <input type="text" name='origin' placeholder='Your Location' />
        <br />
        <input type="text" name="destination" id="" placeholder='Your Destination' />
        <br />
        <button type="submit">Go to</button>
      </form>
      <MyLocation />
      <Direction origin={origin} destination={destination} />
    </div>
  );
}

export default App;

import './App.css';
import Dooh from './components/devices/dooh/Dooh';
import Iphone from './components/devices/iphone/Iphone';
import Laptop from './components/devices/laptop/Laptop';

function App() {
  return (
    <div className="App">
      <Iphone />
      <Laptop />
      <Dooh />
    </div>
  );
}

export default App;

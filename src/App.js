import './App.css';
import Compenent from './profile/compenent.js';
import image from './images/1.jpg'
function App() {
   const handleName = (name) => {
     alert(`Hello ${name}`);
   };
  return (
    <div className="App">
       <Compenent fullName="Hamza Mhalli" bio="B" profession="Engineer" handleName={handleName}>{image}</Compenent>
    </div>
  );
}

export default App;

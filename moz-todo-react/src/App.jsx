import { useState } from "react"; 
import "./App.css";


const Greeting = ({ greeting, name }) => (
  <h1>{greeting} {name}!</h1>
)


const Box = ({ greeting, onGreetingChange, name, onNameChange }) => {
  return (
   <div className="box">
      <Greeting name={name} greeting={greeting} /> 
      
      <input value={greeting} onChange={ onGreetingChange} />
      
      <input value={name} onChange={ onNameChange } />      
    </div>
  );
};


const App = () => {  
  const [greeting, setGreeting] = useState('Hello')
  const [name, setName] = useState('Jack');

  const handleGreetingChange = (event) => {
    const value = event.target.value;

    const formatted = value.charAt(0).toUpperCase() + value.slice(1);
    setGreeting(formatted);
  }

  const handleNameChange = (event) => { // Wrapper function adds logic before update   
    const value = event.target.value;
    
    // Format name before saving (business logic lives in parent)
    const formatted = value.charAt(0).toUpperCase() + value.slice(1);
    setName(formatted); // Update lifted state
  }


  return (
      <Box
        greeting={greeting}
        onGreetingChange={handleGreetingChange} 
        name={name} 
        onNameChange={handleNameChange}      
      />
  );
};


export default App;
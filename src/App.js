import { useState } from 'react';
import './App.css';
function App() {
  
  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:"" });
  console.log(formData);
  function clickHandler(event){
    const {name, type, checked, value} = event.target;
    setFormData(prevData=>{
      return{
        ...prevData,
        [name] : type==="checkbox" ? checked:value
      }
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the whole Data: ");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Type FirstName...' onChange={clickHandler} name="firstName" value={formData.firstName}/>
        <br/><br/>  
        <input type='text' placeholder='Type LastName...' onChange={clickHandler} name="lastName" value={formData.lastName} />
        <br/><br/>
        <input type='email' placeholder='Type e-mail...' onChange={clickHandler} name="email" value={formData.email} />
        <br/><br/>
        <textarea placeholder='Type comments...' onChange={clickHandler} name='comments' value={formData.comments}/>
        <br/><br/>
        <input type='checkbox' name='isVisible' id='isVisible' onChange={clickHandler} checked={formData.isVisible}/>
        <label htmlFor='isVisible'>Am I Visible</label>
        <br/><br/>
        <fieldset>
          <legend>Mode:</legend>
          <input type='radio' name='mode' onChange={clickHandler} id='online-mode' value="online-mode" checked={formData.mode==="online-mode"}/>
          <label htmlFor='online-mode'>Online Mode</label>
          <input type='radio' name='mode' onChange={clickHandler} id='offline-mode' value="offline-mode" checked={formData.mode==="offline-mode"}/>
          <label htmlFor='offline-mode'>Offline Mode</label>
        </fieldset>
        <br/><br/>
        <label htmlFor='favCar'>Select your favourite car: </label>
        <select name='favCar' onChange={clickHandler} id='favCar' value={formData.favCar}>
          <option value="Seltos">Seltos</option>
          <option value="Creta">Creta</option>
          <option value="Fortuner">Fortuner</option>
          <option value="XUV700">XUV700</option>
          <option value="Thar">Thar</option>
        </select>
        <br/><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

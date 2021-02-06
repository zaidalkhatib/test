import React,{useState} from 'react';
import axios from "axios"
function App() {
  const  [value, setValue] = useState("");
  const handleSubmit = async event => {
    event.preventDefault()
    await axios.post('http://localhost:4000/post',value);
    setValue(""); 
  };
  return (
    <div className="container">
    <form>
    <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input  value={value} onChange={e=>setValue(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>   
    <button  onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
  </form>

    </div>
  );
}

export default App;

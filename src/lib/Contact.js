import "./CSS/contact.css"
import React,{useState} from "react"
import axios from "axios";

function Contact() {

      const data ={fname:"", lname:""}
const[inputData, setInputData]=useState(data)

const handleData =(e)=>{
setInputData({...inputData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/users",inputData)
   .then((response)=>{
        console.log(response)
    }
)
}

    return ( 
          <div className="Contact">
            <p>Contact</p>
             <label> first name</label>
            <input type="text" name="fname" value={inputData.fname} onChange={handleData}/>
            <label> last name</label>
            <input type="text" name="lname" value={inputData.lname} onChange={handleData}/>
                 <button onClick={handleSubmit}>submit</button>
        </div>
     );
}

export default Contact;
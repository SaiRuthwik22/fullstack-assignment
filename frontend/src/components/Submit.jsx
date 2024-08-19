import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Submit() {
  let [title,setTitle]=useState("")
  let [description,setDescription]=useState("")
  let [link,setLink]=useState("")

  const navigate = useNavigate()

  function handleChange(event,name){
    if(name=="title"){
      setTitle(event.target.value)
    }
    else if(name=="description"){
      setDescription(event.target.value)
    }
    else{
      setLink(event.target.value)
    }
  }

  async function handleSubmit(){
    let obj = {title:title,description:description,link:link}
    if(link && description && title){
    try {
      const response = await axios.post("http://localhost:8000/api/card/submit",obj)
      console.log(response)
      if(response.data.success == true){
        navigate("/")
      }
    } catch (error) {
      
    }
    }
    }

  return (
    <div id='submit'>
      <div className='input-container'>
        <input type="text" placeholder='Title' onChange={(event)=>{handleChange(event,"title")}} value={title}/>
        <input type="text" placeholder='Description' onChange={(event)=>{handleChange(event,"description")}}  value={description}/>
        <input type="text" placeholder='Link' onChange={(event)=>{handleChange(event,"link")}} value={link}/>
        <button onClick={handleSubmit}>Submit</button>
        {(!link || !description || !title) ? <p style={{color:"red"}}>*All fields are required</p> : ""}
      </div>
    </div>
  )
}

export default Submit
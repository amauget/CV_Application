import { useState } from "react";


export default function Form({ editData, title, toggleEdit}){
  const [formData, setFormData] = useState({ //temporary state to hold form data before submit
    name: editData.name.item,
    source: editData.source.item,
    alt: editData.alt.item,
    phoneNumber: editData.phoneNumber.item,
    email: editData.email.item

  })
  const handleInputChange = (e) =>{
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()

    for(let i in editData){
      let key = editData[i].key 
      //iterates through list to define each key
      
      editData[key].update(formData[key])
      // updateData(editData[key] = formData[key])
      //targets the state function within list and updates.

    }
    toggleEdit(false)
  }
  const handleCancel = (e) =>{
    e.preventDefault()
    
    toggleEdit(false)
  }
  return(
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name='name' value={formData.name} onChange={handleInputChange}/>
    
      <label htmlFor="source">Image URL:</label>
      <input type="text" id="source" name='source' value={formData.source} onChange={handleInputChange}/>

      <label htmlFor="alt">Image Alt Text:</label>
      <input type="text" id="alt" name='alt' value={formData.alt} onChange={handleInputChange}/>

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange}/>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name='email' value={formData.email} onChange={handleInputChange}/>

      <button type="submit">Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )

}
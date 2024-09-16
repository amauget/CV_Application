import { useState } from "react";

export default function Form({ editData, title, toggleEdit}){
  //allows all components to use this Form as long as data structure is consistent
  const generateFormData = () => { 
    let list = {}
    for(let i in editData){
      let key = editData[i].key
      list[key] = editData[key].item
    }
    return list
  }
 
  const[formData, setFormData] = useState(generateFormData())
   
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
    //Iterates over editData object so that forms of varying length can be produced.
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {Object.entries(editData).map(([key, { item }]) => ( //Evaluate whether to keep "item"
        <div key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            type="text"
            id={key}
            name={key}
            value={formData[key]}  // formData holds the current values
            onChange={handleInputChange}  // BUG, this is only running for the 1st Char entered.
          />
        </div>
      ))}
      <button type="submit">Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
    
  )
}
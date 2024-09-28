import { useState } from "react"

export default function AddItem({ data, updateData, updateBool, title }){
  const [newItems, updateNewItems] = useState({title: '', key:crypto.randomUUID(), desc: ''}) 


  const handleInputChange = (e) => {
    const {name, value} = e.target
    
    updateNewItems({...newItems, [name] : value})
  }
  const handleSubmit = () =>{
    updateData([...data, newItems])
    updateBool(false)
  }
  
  const handleCancel = () =>{
    updateBool(false)
  }

  return (
    <div>
      <h1>Add {title}</h1>
      <div>
        <label htmlFor="title">{title}</label>
        <input
          type="text"
          id="title"
          name="title" // Matches the key in state
          value={newItems.title} // Controlled input
          onChange={handleInputChange} // Update state on change
        />

        <label htmlFor="desc">Description of {title}</label>
        <textarea
          id="desc"
          name="desc" // Matches the key in state
          value={newItems.desc} // Controlled textarea
          onChange={handleInputChange} // Update state on change
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}
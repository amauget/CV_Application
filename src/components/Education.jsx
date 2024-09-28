import { useState } from "react";
import EditItem from "./EditItem";
import AddItem from "./AddItem";

export default function Education(){
  const [education, updateEductation] = useState([{title: 'Bachelors', desc: 'EWU'}, {title:'AA', desc:'SFCC'}])
  
  const [editStatus, toggleEdit] = useState(false)
  const [addStatus, toggleAdd] = useState(false) 

  const handleEditClick = () =>{
    if(addStatus === false){ //prevents double positives
      toggleEdit(true)
    }
    
  }
  const handleAddClick = () =>{
    if(editStatus === false){ //prevents double positives
      toggleAdd(true)
    }
  }

  const handleDelete = (event) => {
    console.log(event.target)
    const toDelete = event.target.value //Delete button value asigned as title
    const newData = education.filter(item => item.title !== toDelete)
    updateEductation([...newData])
  }
  if(editStatus === true){
    return(
      <EditItem
        data={education}
        updateData={updateEductation}
        updateBool={toggleEdit}
        title='Education'
      ></EditItem>
    )
  }
  else if(addStatus === true){
    return(
      <AddItem
        data={education}
        updateData={updateEductation}
        updateBool={toggleAdd}
        title='Education'
      ></AddItem>
    )
    
  }
  else{
    return(
      <div>
        <h2>Education</h2>
        <ul>
          {education.map(item =>{
            return(
              <li key={crypto.randomUUID()}>{item.title} - {item.desc} <button value={item.title} onClick={handleDelete}>X</button></li>
            )
          })}
        </ul>
        <button className='edit' onClick={handleEditClick}>Edit</button>
        <button className='addItem' onClick={handleAddClick}>Add Item</button>
      </div>
    
    )
  }
}
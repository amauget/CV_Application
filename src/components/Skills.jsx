import { useState } from "react";
import EditItem from './EditItem'
import AddItem from "./AddItem";

export default function Skills(){
  const [skillData, updateData] = useState(
    [
    {title:'Estimating', key:crypto.randomUUID(), desc: 'I have assisted in the bid process for projects with an overhead of up to $10 million.'}, 
    {title:'Project Submittals', key:crypto.randomUUID(), desc: 'My project management team has entrusted me with safety plans, QC reports, scheduling, and the facilitation of subcontractor submittals to ensure that all precon submittals are approved weeks before NTP.'}, 
    {title:'Microsoft Excel/Office', key:crypto.randomUUID(), desc: ''}
    ] 
  )
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
    const toDelete = event.target.value //Delete button value asigned as title
    const newData = skillData.filter(item => item.title !== toDelete)
    updateData([...newData])
  }

  if(editStatus === true){
    return(
      <EditItem
         /* { data, updateData, toggleEdit } */
         data={skillData}
         updateData={updateData}
         updateBool={toggleEdit}
         title='Skills'
       ></EditItem>
       )
 
  }
  else if(addStatus === true){
    return(
      <AddItem
         /* { data, updateData, toggleEdit } */
         data={skillData}
         updateData={updateData}
         updateBool={toggleAdd}
         title='Skill'
       ></AddItem>
       )
  }
  else{
    return( 
      <div>
        <h2>Skills</h2>
          {skillData.map((item) =>{
            return(
            <Skill
              key={item.key} //Distinct key identifier
              title={item.title}
              description={item.desc}
            ></Skill>
            )
          })}
          <button className='edit' onClick={handleEditClick}>Edit Skill</button>
          <button className='addItem' onClick={handleAddClick}>Add Skill</button>
      </div>
    )
  }

  function Skill({ title, description }){ //nest edit bool?
    return(
      <div className='skills' id={title.replace(' ','')}>
        <button onClick={handleDelete} value={title}>Delete</button>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
      </div>    
    )
  }
}


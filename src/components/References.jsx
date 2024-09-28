import { useState } from "react";

export default function References(){
  const [references, updateReferences] = useState([ //Different Data Structure will require update of EditItem
    {name: 'Jon Doe', title: 'Branch Manager', key: crypto.randomUUID(), phone: '555.555.5555', email:'email@somewhere.com'},
    {name: 'Harry Butz',title: 'Supervisor', key: crypto.randomUUID(), phone: '111.111.1111', email: 'someone@somewhere.com'}
  ])
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
    const newData = references.filter(item => item.title !== toDelete)
    updateReferences([...newData])
  }
  if(editStatus === true){
    return(
      <EditRefs
         /* { data, updateData, toggleEdit } */
         data={references} 
         updateData={updateReferences}
         updateBool={toggleEdit}
         title='References'
       ></EditRefs>
       )
  }
  else{
    return(
      <div>
        <ul>
          {
            references.map(item =>{
              return(
                <li key={item.key}>
                  <button onClick={handleDelete} value={item.title}>X</button>
                  <p>{item.title}</p>
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                </li>
              )
            })
          }
        </ul>
        <button className='edit' onClick={handleEditClick}>Edit</button>
        <button className='addItem' onClick={handleAddClick}>Add Item</button>

      </div>
    )
  }
}

function EditRefs({ data, updateData, updateBool, title }){
  const [editRefData, updateEditRefData] = useState([...data])

  const handleInputChange = (e) =>{
    const {name, value} = e.target 
    const index = e.target.className
    console.log(index)
    updateEditRefData([/* ...editRefData,  */editRefData[index][name] = value])
    console.log(editRefData)
    // updateEditRefData(...editRefData)
  }
  const handleSubmit = () =>{
    updateData([...editRefData])
    updateBool(false)
  }
  const handleCancel = () =>{
    updateBool(false)

  }

  console.log(editRefData)
  return(
    
    <div>
      <h1>Edit {title}</h1>
      {editRefData.map(item =>{
        let index = editRefData.indexOf(item)
        return(
          <div key={item.key}>
            <label htmlFor="name">Name of Reference</label>
            <input 
              type='text'
              id='name'
              className={index}
              name='name' 
              value={item.name}
              onChange={handleInputChange}
            ></input>
          </div>
        )
       
      })}
       <button onClick={handleSubmit}>Submit</button>
       <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}
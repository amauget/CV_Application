import { useState } from "react";

export default function EditItem({ data, updateData, updateBool, title }){
  //Mapping the Array creates a deep copy... Prevents OG data from changing
  const [editData, updateEditData] = useState(data.map(item =>({...item})))

  const handleInputChange = (e) => {
    const {name, value} = e.target

    const index = e.target.className

    editData[index][name] = value
    updateEditData([...editData])
  }
  const handleSubmit = () =>{
    updateData([...editData])
    updateBool(false)
  }
  const handleCancel = () =>{
    updateBool(false)

  }
  return(
    <div>
        <h1>Edit {title} Info</h1>
      {editData.map((item) =>{

        let index = editData.indexOf(item)  

        return(
          <div key={item.key}>
            <label htmlFor='title'>{title}</label>
            <input
              type="text" 
              id='title'
              className={index}
              name='title'
              value={item.title}
              onChange={handleInputChange}
              />
            
            <label htmlFor='desc'>Description of {title}</label>
            <textarea
              type='text'
              id='desc'
              className={index}
              name={'desc'}
              value={item.desc}
              onChange={handleInputChange}
            ></textarea>
          </div>
        )
      })}
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  )
  
}

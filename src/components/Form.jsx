import { useState } from "react";

export default function Form(editData){ // list with nested keys of item or update
  let data = editData.editData
  const [value, setValue] = useState(data);

  let handleSubmit = () =>{
    for(let i in data){
      console.log(data[i].item)
      data[i].update(data[i].item)
    }
    console.log(data.name)
  }

  return(
    <div>
    <h1>Edit Header</h1>
    <Input
    label = 'Name:' 
    initial={data.name.item}
    type='text'
    id='name'
    className = 'menuItem'
    updateValue = {data.name.update}
    />
    {/* <div className='imgContainer'>
      <Image 
      src={source}
      alt={alt}
      />

      <Input 
      label='Image URL:'
      initial={source}
      type='text'
      id='source'
      className='menuItem'
      updateValue={updateSource}
      />

    </div>
    <Input 
      label='Phone Number:'
      initial={phoneNumber}
      type='text'
      id='phone'
      className='menuItem'
      updateValue={updatePhoneNumber}
      /> */}
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={() =>{data.edit.update(false)}}>Cancel</button>
  </div>
  )
  function Input({ initial, id, type, className, updateValue, label, editData }){

    const handleChange = (event) =>{ 
        
      setValue(event.target.value)
    }
    
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          required
          id={id}
          className={className}
          type={type}
          value={value[id].item}
          onChange={handleChange}
  
        />
      </div>
    )    
  }
  
  
}






import { useState } from 'react'
import Form from './Form'

export default function Heading(){
  const [name, updateName] = useState('Harold R. Painbad')
  const [source, updateSource] = useState("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Hide_the_Pain_Harold_%28Andr%C3%A1s_Arat%C3%B3%29.jpg/300px-Hide_the_Pain_Harold_%28Andr%C3%A1s_Arat%C3%B3%29.jpg")
  const [alt, updateAlt] = useState('Hide the pain Harold')
  const [phoneNumber, updatePhoneNumber] = useState('555.555.5555')
  const [email, updateEmail] = useState('harold@somewhere.com')
  const [edit, toggleEdit] = useState(false)

  const [editData, updateData] = useState({
    //item is value, key is for identifying during loop iteration, update is state function
    name: {item: name, key:'name', update: updateName }, 
    source: { item: source, key: 'source', update: updateSource}, 
    alt: {item: alt, key:'alt', update: updateAlt}, 
    phoneNumber: {item: phoneNumber, key:'phoneNumber', update: updatePhoneNumber}, 
    email: {item: email, key:'email', update: updateEmail}, 
  }
  )
  const [formData, setFormData] = useState({ //temporary state to hold form data before submit
    name: name,
    source: source,
    alt: alt,
    phoneNumber: phoneNumber,
    email:email

  })
  
  if(edit === true){
  

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
  }else{
    return(
     <Output></Output>
    )
  }

 
  function Output(){
    return(
      <div>
      <h1>{name}</h1>
       <Image 
       src={source}
       alt={alt}
       />
       <button onClick={handleClickBtn} >
         Edit Header
       </button>
       <h3>{phoneNumber}</h3>
       <h3>{email}</h3> 
     </div>
    )
  }

  function handleClickBtn(){
    edit === true ? toggleEdit(false) : toggleEdit(true)
  }
}



function Image({ src, alt }){
  return(
    <img src={src} alt={alt}></img> 
  )
}




/* List of state items within the header:
name > fullName
image > src, alt
contact info
*/
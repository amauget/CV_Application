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
    name: {item: name, update: updateName }, 
    source: { item: source, update: updateSource}, 
    alt: {item: alt, update: updateAlt}, 
    phoneNumber: {item: phoneNumber, update: updatePhoneNumber}, 
    email: {item: email, update: updateEmail}, 
    edit: {item: edit, update: toggleEdit}
  }
  )
  
  if(edit === true){
    return(
      <Form
       editData={editData}
       />
    )
  }else{
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
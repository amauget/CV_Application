import { useState, useEffect } from 'react'
import Form from './Form'

export default function Heading(){
  const [name, updateName] = useState('Harold R. Painbad')
  const [source, updateSource] = useState("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Hide_the_Pain_Harold_%28Andr%C3%A1s_Arat%C3%B3%29.jpg/300px-Hide_the_Pain_Harold_%28Andr%C3%A1s_Arat%C3%B3%29.jpg")
  const [alt, updateAlt] = useState('Hide the pain Harold')
  const [phoneNumber, updatePhoneNumber] = useState('555.555.5555')
  const [email, updateEmail] = useState('harold@somewhere.com')
  const [editStatus, toggleEdit] = useState(false)

  const [editData, updateData] = useState({
    //item is value, key is for identifying during loop iteration, update is state function
    name: {item: name, key:'name', update: updateName }, 
    source: { item: source, key: 'source', update: updateSource}, 
    alt: {item: alt, key:'alt', update: updateAlt}, 
    phoneNumber: {item: phoneNumber, key:'phoneNumber', update: updatePhoneNumber}, 
    email: {item: email, key:'email', update: updateEmail}, 
  }
  )

  useEffect(() =>{ //Triggers the updateData() when any of the data below are detected to change
    updateData({
      //item is value, key is for identifying during loop iteration, update is state function
      name: {item: name, key:'name', update: updateName }, 
      source: { item: source, key: 'source', update: updateSource}, 
      alt: {item: alt, key:'alt', update: updateAlt}, 
      phoneNumber: {item: phoneNumber, key:'phoneNumber', update: updatePhoneNumber}, 
      email: {item: email, key:'email', update: updateEmail}, 
    })
  }, [name, source, alt, phoneNumber, email])
  
  if(editStatus === true){
    
    

    return(
      <Form
      editData={editData}
      title={'Edit Header'}

      //"edit" data/methods seperated out because it is a bool datatype 
      editStatus = {editStatus} 
      toggleEdit = {toggleEdit}
      />
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
    editStatus === true ? toggleEdit(false) : toggleEdit(true)
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
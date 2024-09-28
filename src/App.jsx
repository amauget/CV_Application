import { useState } from 'react'
import Input from './components/Form'
import './App.css'

export default function App() {
  return(
    <ul>
    <Input 
      initial='First'
      type='text'
      className='First'
      
    />
    
    <Input 
    initial='something@somewhere.com'
    type='email'
    className='Second'
    />
    </ul>
    

  )
  
  

}


 

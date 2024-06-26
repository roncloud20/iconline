import { useState } from 'react'
import Button from '../../Components/Forms/Button'
import TextInput from '../../Components/Forms/TextInput'
import Header from '../../Components/Header'

export default function Register() {
  const [formInput,setFormInput] =useState({
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    tel:'',
    username:'',
    password:'',
    confirmPassword:''
  });

  const { confirmPassword, email, firstname, lastname, middlename, password, tel, username } = formInput;

  const handleInput = (e)=>{
    setFormInput(prev =>({...prev,[e.target.name]:e.target.value}))
  }

  async function staffRegister() {

  }

  return (
    <>
      <Header/>
      <div className='container m-10 mx-auto'>
        <h2 className='text-3xl font-black text-center'>Staff Registration</h2>
        <form className='ml-10 mr-10 mx-auto'>
          <TextInput type="text" placeholder="Firstname: (John)" name="firstname" clickHandler={(e)=>handleInput(e)} value={firstname}/>
          <TextInput type="text" placeholder="Middlename: (James)" name="middlename" clickHandler={(e)=>handleInput(e)} value={middlename} />
          <TextInput type="text" placeholder="Lastname: (Doe)" name="lastname" clickHandler={(e)=>handleInput(e)} value={lastname} />
          <TextInput type="tel" placeholder="Phone Number: (0800-000-0000)" name="tel" clickHandler={(e)=>handleInput(e)} value={tel} />
          <TextInput type="email" placeholder="E-Mail Address: (yourname@domain.com)" name="email" clickHandler={(e)=>handleInput(e)} value={email}/>
          <TextInput type="text" placeholder="Username: (johndoe007)" name="username" clickHandler={(e)=>handleInput(e)} value={username} />
          <TextInput type="password" placeholder="Password: (**********)" name="password"  value={password} clickHandler={(e)=>handleInput(e)}/>
          <TextInput type="password" placeholder="Confirm Password: (**********)" name="confirmPassword"  value={confirmPassword} clickHandler={(e)=>handleInput(e)}/>

          <Button value="Register Staff" clickHandler={staffRegister}/>
        </form>
      </div>
    </>
  )
}

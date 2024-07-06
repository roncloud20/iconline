import { useState } from 'react';
import Button from '../../Components/Forms/Button';
import TextInput from '../../Components/Forms/TextInput';
import Header from '../../Components/Header';
import avatar from '../../Resources/avatar.png';
import TextInputNotRequired from '../../Components/Forms/TextInputNotRequired';
export default function Register() {
  // Setting the form Input State
  const [formInput,setFormInput] =useState({
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    tel:'',
    // username:'',
    password:'',
    confirmPassword:''
  });

  const { confirmPassword, email, firstname, lastname, middlename, password, tel } = formInput;

  const handleInput = (e)=>{
    setFormInput(prev =>({...prev,[e.target.name]:e.target.value}))
  }

  // Handle file upload 
  const [file, setFile] = useState(avatar);
  const [fileError, setFileError] = useState("");
  const [staffImage, setStaffImage] = useState("");

  const handleUpload = (e) => {
    let image = e.target.files[0];
    if (image.type === "image/jpeg"|| image.type === "image/png" || image.type === "image/jpg") {
      setFile(URL.createObjectURL(image));
      setStaffImage(image);
      setFileError("");
    } else {
      setFileError("Upload Failed, please upload an Image file");
    }
  }

  async function staffRegister() {
    if(firstname !== "" && lastname !== "" && email !== "" && tel !== "" && password !== "") {

      if (password === confirmPassword){
        if (password.length > 7) {
          let formData = new FormData();
          formData.append('firstname', firstname);
          formData.append('middlename', middlename);
          formData.append('lastname', lastname);
          formData.append('email', email);
          formData.append('tel', tel);
          formData.append('username', lastname.charAt(0).toUpperCase() + firstname + Math.floor(Math.random() *1000));
          formData.append('password', password);
          formData.append('profilepicture', staffImage);
  
          let result = await fetch("http://localhost:8000/api/staff/register", {
            method: 'POST',
            body: formData
          });
  
          result = await result.json();
          alert(result);
          console.log(result);
        } else {
          alert("8 Characters and above required");
        }
      } else {
        alert("Password do not match confirm password");
      }
    } else {
      alert("Some Fields are not filled");
    }
  }

  return (
    <>
      <Header/>
      <div className='container m-10 mx-auto'>
        <h2 className='text-3xl font-black text-center'>Staff Registration</h2>
        <form className='ml-10 mr-10 mx-auto'>
          <div className='mt-5 flex flex-col justify-center content-center'>
            <img className="inline-block size-40   mx-auto rounded-full ring-2 ring-subtle" src={file} alt="Staff Profile"/>

            <span>{fileError || ""}</span>

            <input type="file" className="block text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-subtle mx-auto mt-3" onChange={handleUpload}/>
            
          </div>
          <TextInput type="text" placeholder="Firstname: (John)" name="firstname" clickHandler={(e)=>handleInput(e)} value={firstname}/>
          <TextInputNotRequired type="text" placeholder="Middlename: (James)" name="middlename" clickHandler={(e)=>handleInput(e)} value={middlename} />
          <TextInput type="text" placeholder="Lastname: (Doe)" name="lastname" clickHandler={(e)=>handleInput(e)} value={lastname} />
          <TextInput type="tel" placeholder="Phone Number: (0800-000-0000)" name="tel" clickHandler={(e)=>handleInput(e)} value={tel} />
          <TextInput type="email" placeholder="E-Mail Address: (yourname@domain.com)" name="email" clickHandler={(e)=>handleInput(e)} value={email}/>
          {/* <TextInput type="text" placeholder="Username: (johndoe007)" name="username" clickHandler={(e)=>handleInput(e)} value={username} /> */}
          <TextInput type="password" placeholder="Password: (**********)" name="password"  value={password} clickHandler={(e)=>handleInput(e)}/>
          <TextInput type="password" placeholder="Confirm Password: (**********)" name="confirmPassword"  value={confirmPassword} clickHandler={(e)=>handleInput(e)}/>

          <Button value="Register Staff" clickHandler={staffRegister}/>
        </form>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import './Contact.css'

const Contact = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onsubmit = (data)=>{
    console.log(data);
  }

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');

  

  return (
    <>
  
    <div className='form'>

    <form onSubmit={handleSubmit(onsubmit)} method='post' action='/'>

    <h1>Contact Us </h1>
    <br/>

   <label>First Name -</label><br/>
   <input type='text' onChange={(e)=> setfname(e.target.value)}  name="fname"  
    {...register("fname", {required:true, maxLength: { value: 20, message: "Maximun Lentgh is 20"} })}
    aria-invalid = {errors.fname ? "true" : "false"}
    className={errors.fname ? "inputerror" : ""}

   />
   {errors.fname && <p className="errorsmsg">{errors.fname.message}</p>}
   <br/>
   <br/>
   
   <label> Last Name -</label><br/>
   <input type='text' name="lname" onChange={(e)=> setlname(e.target.value)}
    {...register("lname", { pattern: {value: /^[A-Za-z]+$/i, message: "follow some rules " }})}
    className={errors.lname ? "inputerror" : ""}
   />
   {errors.lname && <p className='errorsmsg'>{errors.lname.message}</p>}
   <br/>
   <br/>

   <label>Email - </label><br/>
   <input type='email' name='eamil'  onChange={(e)=> setemail(e.target.value)}
    {...register("email", {required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message:"make Sure add @ in your mail"}})}
   />
   <br/>
   <br/>

   <label> Phone No. -</label><br/>
   <input type='phone' name='contactnum' onChange={(e)=> setphone(e.target.value)}
    {...register("contactnum", {required: true, maxLength: { value: 10, message: "Contact Number Should Be in 10 digits"}} )}
   />
   <br/>
   <br/>

   <input type='submit' value="Submit Now"/>


    </form>

    </div>

    <div className='address'>

   <div className='officetext'>
    <h1>Office</h1>
    </div>
    <br/>
    
    <div className='officetext'>
    <p>+91 7838169163</p>
    </div>

    <div className='officetext'>
    <p>shayamajifilms@gmail.com</p>
    </div>
    

    </div>

    <div className='cards-div'>

    <div className="profile-cards">

       <div className="profile-photo" id='photo1'>

       </div>

       <div className="profile-details">
       Name :- Amit Soni 
       <br/><br/>
       Post :- CEO producer
       <br/><br/>
      

       </div>


        </div>

        
        <div className="profile-cards">

       <div className="profile-photo" id='photo2'>

       </div>

       <div className="profile-details">
       Name :- Sulekha Sharma
       <br/><br/>
       Post :- Script Writter
       <br/><br/>       

       </div>


        </div>


    </div>

  

    </>
    
  )
}

export default Contact;
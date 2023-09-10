import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    country: "",
  })


  const navigate = useNavigate(); 
  const {id} = useParams(); 

  useEffect(()=> {
    axios.get('http://localhost:8800/api/users/'+id) //Get Request for that particulat student so that we can set the data up in the fields for updation
    .then(res => {
        setData({...data, 
            firstname: res.data.Result.firstname,
            lastname: res.data.Result.lastname,
            country: res.data.Result.country,
        })
    })
    .catch(err =>console.log(err));
}, [])
  
const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8800/api/users/'+id, data) //Put Request for the changes made in the User Description Form
    .then(res => {
        if(res.data.Status === "Success") {
            navigate('/');
        }
    })
    .catch(err => console.log(err));
    
}

const handleClick = () => {
  navigate('/');
 }
  

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Users</h2>
			<form class="row g-3 w-50">
			<div class="col-12">
					<label htmlFor="firstname" class="form-label">FirstName</label>
					<input type="text" class="form-control" id="firstname" placeholder='Enter Firstname'
					onChange={e => setData({...data, firstname: e.target.value})} value={data.firstname}/>
				</div>
				<div>
					<label htmlFor="lastname" class="form-label">LastName</label>
					<input type="text" class="form-control" id="lastname" placeholder='Enter Lastname' 
					onChange={e => setData({...data, lastname: e.target.value})} value={data.lastname}/>
				</div>
				<div>
					<label htmlFor="country" class="form-label">Country</label>
					<input type="text" class="form-control" id="country" placeholder="Enter Country"
					onChange={e => setData({...data, country: e.target.value})} value={data.country}/>
				</div>
				
				<div>
					<button class="btn btn-primary" onClick={handleSubmit}>Update</button>
				</div>
			</form>
      <button className='btn btn-danger' onClick={handleClick}>Home</button>
		</div>
    
  )
}

export default EditUser
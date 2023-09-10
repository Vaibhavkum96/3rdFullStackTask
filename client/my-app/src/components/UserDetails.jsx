import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams, Link } from 'react-router-dom';

const UserDetails = () => {
   
    const {id} = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8800/api/users/'+id) //Get Request for getting all a particulat User
        .then(res => setUser(res.data.Result))
        .catch(err => console.log(err));
    }, [])
    
    
   const handleClick = () => {
    navigate('/');
   }

  return (
    <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>FirstName: {user.firstname}</h3>
                <h3>LastName: {user.lastname}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Country: {user.country}</h3>
            </div>
            <div>
            {<Link to={`/editDetails/`+user.id} className='btn btn-primary btn-sm me-2'>Edit Details</Link>}
                <button className='btn btn-danger' onClick={handleClick}>Home</button>
            </div>
        </div>
    </div>
  )
}

export default UserDetails
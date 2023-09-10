import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const User = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
      axios.get('http://localhost:8800/api/users/')
      .then(res => {
        if(res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
    }, [])
 
    // console.log(data);

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>User List</h3>
      </div>
      
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return <tr key={user.id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  
                  <td>
                    { <Link to={`/userDetails/`+user.id} className='btn btn-primary btn-sm me-2'>View Details</Link> }
                    {<Link to={`/editDetails/`+user.id} className='btn btn-primary btn-sm me-2'>Edit Details</Link>}
                  </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User
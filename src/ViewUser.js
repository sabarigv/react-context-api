import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import User from './User';
import UserContext from './UserContext';

function ViewUser() {
    let userData = useContext(UserContext)
    // let users = [
    //     {
    //         id: 1,
    //         name: "Kalai",
    //         position: "Developer",
    //         office: "Chennai",
    //         age: 45,
    //         startDate: '01/01/2021',
    //         salary: 135000
    //     },
    //     {
    //         id: 2,
    //         name: "Ramya",
    //         position: "Developer",
    //         office: "Chennai",
    //         age: 24,
    //         startDate: '01/01/2021',
    //         salary: 35000
    //     },
    //     {
    //         id: 3,
    //         name: "Pavithra",
    //         position: "Developer",
    //         office: "Chennai",
    //         age: 24,
    //         startDate: '01/01/2021',
    //         salary: 35000
    //     },
    //]
    let {id} = useParams();
    console.log(id)
  return (
    <>
    {/* <div>Name : {users[id -1 ].name}</div> */}
    <h3>{userData.user.name}</h3>
    <button class="btn btn-outline-success" onClick={() => {userData.setUser({name :"Ramya GV", age :24, position : "Developer"})}}>Change</button>
    </>
  )
}

export default ViewUser
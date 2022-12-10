import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Portal from './Portal';
import UserContext from './UserContext';

function User() {
    const [users, setUsers] = useState([])
    let userData = useContext(UserContext)
    //On mount
    useEffect(() => {

        fetchData()
    }, [])
    let fetchData = async () => {
        let userData = await axios.get("https://6387045de399d2e473f22571.mockapi.io/students")
        console.log(userData)
        setUsers(userData.data)
    }

    let handleDelete = async (id) => {
        let ask = window.confirm("Confirm DELETE")
        if (ask) {
            await axios.delete(`https://6387045de399d2e473f22571.mockapi.io/students/${id}`)
            fetchData()
        }
    }
    //On destroyS
    //   useEffect(() => {
    //   return() => {
    //     console.log("On destroy")
    //   }
    // }, [])

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
    // ]

    return (
        <>
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <h3>{userData.user.name}</h3>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>

            <Link to="/portal/users/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Create Users</Link>
           
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user.name}</td>
                                                <td>{user.position}</td>
                                                <td>{user.office}</td>
                                                <td>{user.age}</td>
                                                <td>{user.startDate}</td>
                                                <td>${user.salary}</td>
                                                <td>
                                                    <Link to={`/portal/users/view/${user.id}`} type="button" class="btn btn-secondary mr-2">View</Link>
                                                    <Link to={`/portal/users/edit/${user.id}`} type="button" class="btn btn-warning mr-2">Edit</Link>
                                                    <button onClick={() => handleDelete(user.id)} type="button" class="btn btn-danger mr-2">Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
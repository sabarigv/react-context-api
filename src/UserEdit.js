import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserEdit() {
    let [isLoading, setLoading] = useState(false)
    let params = useParams();
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues : {
            name: "",
            position: "",
            office: "",
            age: "",
            startDate: "",
            salary: "",
        },
        validate : (values) => {
            let errors = {}
            // let pattern = new RegExp(/^[a-zA-Z\-]+$/)
            if (!values.name) {
              errors.name = "Please Enter the Name"
            } else if (values.name.length < 5) {
              errors.name = "Atleast 5 Characters needed"
            } else if (values.name.length > 25) {
              errors.name = "Not more than 25 Characters needed"
            }
            //else if (!pattern.test(formik.values.name)){
            //   errors.name = "No Numbers in Name"
            // }
      
            if (!values.position) {
              errors.position = "Please enter Position"
            }
      
            return errors
          },
        onSubmit : async(values) => {
           try {
            await axios.put(`https://6387045de399d2e473f22571.mockapi.io/students/${params.id}`, values);
            navigate("/portal/users")
           } catch (error) {
            alert("Something went WRONG")
           }
        }
    })
    useEffect(() => {
        let fetchData = async () => {
            let userData = await axios.get(`https://6387045de399d2e473f22571.mockapi.io/students/${params.id}`)
            console.log(userData)
            // setUsers(userData.data)
            formik.setValues(userData.data)
           }
           fetchData()
    }, [])
    
  return (
    <>
    <h3>Enter the User Details :</h3>
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <br />
        <div class="input-group">
          <span class="input-group-text">First and last name</span>
          <input name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Name" type="text" aria-label="Name" class={`form-control ${formik.errors.name ? 'error-border' : ''}`} />
        </div>
        {
          formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : null
        }

        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Position
          </span>
          <input
            name="position" onChange={formik.handleChange} value={formik.values.position}
            type="text"
            class="form-control"
            placeholder="Your Position"
            aria-label="Your Position"
            aria-describedby="addon-wrapping"
          />

        </div>
        {
          formik.errors.position ? <span style={{ color: 'red' }}>{formik.errors.position}</span> : null
        }
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Office
          </span>
          <input
            name="office" onChange={formik.handleChange} value={formik.values.office}
            type="text"
            class="form-control"
            placeholder="Office"
            aria-label="Office"
            aria-describedby="addon-wrapping"
          />
        </div>
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Age
          </span>
          <input
            name="age" onChange={formik.handleChange} value={formik.values.age}
            type="number"
            class="form-control"
            placeholder="Age"
            aria-label="Age"
            aria-describedby="addon-wrapping"
            min="" max=""
          />
        </div>
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Start Date
          </span>
          <input
            name="startDate" onChange={formik.handleChange} value={formik.values.startDate}
            type="date"
            class="form-control"
            placeholder="Age"
            aria-label="Age"
            aria-describedby="addon-wrapping"
            min="" max=""
          />
        </div>
        <br />
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
          <input
            name="salary" onChange={formik.handleChange} value={formik.values.salary}
            type="text"
            class="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <br />
        <div class="col-12">
          <input class="btn btn-primary" type={"submit"} value="Submit Form" disabled={!formik.isValid && isLoading} />
        </div>
      </form>
    </div>
  </>
  )
}

export default UserEdit
import React, { useState } from "react";
import "./App.css";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Createuser() {

  let navigation = useNavigate()
  let [isLoading, setLoading] = useState(false)
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
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

    onSubmit: async (values) => {
      try {
        setLoading(true);
        console.log(values);
        await axios.post("https://6387045de399d2e473f22571.mockapi.io/students",values)
        // let data = await fetch("https://6387045de399d2e473f22571.mockapi.io/students", {
        //   method: "POST",
        //   body: JSON.stringify(values),
        //   "Content-type" : "application/json"
        // })
        navigation('/portal/users')
      } catch (error) {

      }
    },
  });

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
  );
}

export default Createuser;

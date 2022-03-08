import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postCustomer } from '../apis/strapiapi';
import '../App.css';


// const data = {
//   "data": {
//     "name": "vijay",
//     "email": "vijay@example.com",
//     "address": "string",
//     "projects": [
//       "1",
//     ],
//     "createdAt": "2022-02-08T11:08:13.034Z",
//     "updatedAt": "2022-02-08T11:08:13.034Z",
//     "publishedAt": "2022-02-08T11:08:13.034Z",
//     "createdBy": "string or id",
//     "updatedBy": "string or id"
//   }
// }

// export default function ProjectForm() {
  const ProjectForm = () => {
  console.log('ProjectForm loaded');
  debugger;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useHistory()
  const onSubmitHandle = async (e) => {
    e.preventDefault()
    const postData = {
      "data": {
        "name": name,
        "email": email,
        "address": address,
        "projects": [
          "1",
        ],
        "createdAt": "2022-02-08T11:08:13.034Z",
        "updatedAt": "2022-02-08T11:08:13.034Z",
        "publishedAt": "2022-02-08T11:08:13.034Z",
        "createdBy": "string or id",
        "updatedBy": "string or id"
      }
    }
    const { status } = await postCustomer(postData);
    if (status === 200) navigate.push("/");
  }
  const onChangeHandle = (fieldValue, fieldName) => {
    if (fieldName === 'name') setName(fieldValue)
    if (fieldName === 'address') setAddress(fieldValue)
    if (fieldName === 'email') setEmail(fieldValue)
  }

  return (
    <div>
      <Link to={'/'}> Back</Link>
      <br /><br /><br />
      <form onSubmit={() => onSubmitHandle}>
        <label htmlFor="name">Name:</label><br />
        <input className='field' onChange={(e) => { onChangeHandle(e.target.value, 'name') }} type="text" id="name" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input className='field' onChange={(e) => { onChangeHandle(e.target.value, 'email') }} type="text" id="email" name="email" /><br /><br />
        <label htmlFor="address">Address:</label><br />
        <input className='field' onChange={(e) => { onChangeHandle(e.target.value, 'address') }} type="text" id="address" name="address" /><br /><br />
        <input className='buttonStyle' onClick={onSubmitHandle} type="button" value="Submit" />
      </form>
    </div>
  );
}
export default ProjectForm;
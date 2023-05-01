import React, { useState } from 'react';
import firebase from 'firebase/app';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

const JobPost = () => {
  const [name, setName] = useState('');
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState('');
  const [jobTime, setJobTime] = useState('full-time');
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleJobTimeChange = (event) => {
    setJobTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobRoleChange = (event) => {
    setJobRole(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jobData = {
      name,
      jobType,
      salary,
      jobTime,
      location,
      jobRole,
      description,
    };
    try {
      
      const docRef = await addDoc(collection(db, "Newusers"), {
        ...jobData
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Job Type:
        <select value={jobType} onChange={handleJobTypeChange}>
          <option value="">Select a job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>
      </label>
      <label>
        Salary:
        <input type="text" value={salary} onChange={handleSalaryChange} />
      </label>
      <label>
        Job Time:
        <select value={jobTime} onChange={handleJobTimeChange}>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
        </select>
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <label>
        Job Role:
        <input type="text" value={jobRole} onChange={handleJobRoleChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobPost;

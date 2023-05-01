import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase';

const JobCard = ({ jobData }) => {
  return (
    <div>
      <h2>{jobData.name}</h2>
      <p>Job Type: {jobData.jobType}</p>
      <p>Salary: {jobData.salary}</p>
      <p>Job Time: {jobData.jobTime}</p>
      <p>Location: {jobData.location}</p>
      <p>Job Role: {jobData.jobRole}</p>
      <p>Description: {jobData.description}</p>
    </div>
  );
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "Newusers"));
      //const data = await db.collection('NewUsers').get();
      console.log(querySnapshot)
      setJobs(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //setJobs(querySnapshot.forEach((doc) => ({ ...doc.data(), id: doc.id})))
      console.log(jobs)
      //setJobs(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} jobData={job} />
      ))}
    </div>
  );
};

export default JobList;

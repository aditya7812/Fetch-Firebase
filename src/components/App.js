import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useHistory, useNavigate } from 'react-router-dom';
//import firebase from 'firebase/app';
import {auth} from '../firebase';
import {signInAnonymously} from 'firebase/auth';
import JobPost from './JobPost'
import JobList from './JobList';

const HomePage = () => {
  //const history = useHistory();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      signInAnonymously(auth); // Sign in anonymously to enable Firebase Authentication
      //history.push('/post-jobs'); // Navigate to the post jobs page
      navigate("/post-jobs")
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSeeJobs = async () => {
    navigate("/get-jobs")
  }

  return (
    <div>
      <h1>Job Portal Home Page</h1>
      <button onClick={handleSignUp}>Sign up as Employer</button>
      <button onClick={handleSeeJobs}>See Jobs</button>
    </div>
  );
};

const PostJobsPage = () => {
  return (
    <div>
      <h1>Post Jobs Page</h1>
      {/* Add your job posting form here */}
    </div>
  );
};

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}>
          
        </Route>
        <Route exact path="/post-jobs" element={<JobPost />}>
          
        </Route>
        <Route exact path="/get-jobs" element={<JobList />}>
          
        </Route>
        </Routes>
    </Router>
  );
};

export default App;

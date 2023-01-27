import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link}from 'react-router-dom'


const SignIn = () => {
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signin', {
                UserName: UserName,
                password: password
            });
            setToken(response.data.token);
            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
    }, []);
  
    return (
      
        <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
            <h1 className="text-center" >Welcome To Invertory Mangement</h1>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                

                <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">SignIn</p>

               
          <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input type="text" id="form3Example1c" class="form-control" />
                    <label className="form-label" for="form3Example1c">User Name</label>
                  </div>
                </div>
              
            
              <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control"
                         value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Login</button>  
                  </div>
                  
               
                           
                 
                 <Link aria-current="page"to="/SingUp">Click Here For SignUp</Link>
              
                 
                 
                 
          </form>
      </div>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
  );
};

export default SignIn;

    
  


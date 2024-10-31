import React, { useState } from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Input/Button';
import { useNavigate } from 'react-router';

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: '',
    }),
    email: '',
    password: '',
  });
const navigate = useNavigate()
 
  return (
    <div className='bg-light h-screen flex items-center justify-center'>
    <div className='bg-white w-[600px] h-[700px] shadow-lg rounded-lg flex flex-col justify-center items-center'>               
      <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
      <div className="text-xl font-light mb-14">{isSignInPage ? 'Sign in to get explored' : 'Sign up now to get started'}</div>
      <form className="flex flex-col items-center w-full"onSubmit={() => console.log("Submitted")}>
      {!isSignInPage && ( 
        <Input
          label="Full name"
          name="name"
          placeholder="Enter your full name"
          className="mb-6 w-[50%]"
          value={data.fullName} // Ensure the value prop is passed
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
      )}
      <Input
        label="Email address"
        name="email"
        type='email'
        placeholder="Enter your email"
        className="mb-6 w-[50%]"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
        label="Password"
        name="password"
        placeholder="Enter your password"
        className="mb-14 w-[50%]"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <Button label={isSignInPage ? 'Sign in' : 'Sign up'} type='submit' className="w-1/2 mb-2" />
      </form>
      
      <div>
        {isSignInPage ? "Didn't have an account" : "Already have an account"}{' '}
        <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'Sign up' : 'Sign in'}`)}>{isSignInPage ? 'Sign up' : 'Sign in'}</span>
      </div>
    </div>
    </div>
  );
};

export default Form;

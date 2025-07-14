import { SignUp } from '@clerk/clerk-react';
import React from 'react'

function SigningUp(){
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
    }}>
      <SignUp />
    </div>
  )
}

export default SigningUp;
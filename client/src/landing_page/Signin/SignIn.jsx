import { SignIn } from '@clerk/clerk-react';
import React from 'react'

function SigningIn() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
    }}>
      <SignIn />
    </div>
  )
}

export default SigningIn;
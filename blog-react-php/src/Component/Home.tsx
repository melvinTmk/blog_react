import React, { useState, useEffect } from 'react';

interface FormPropsInterface {
    setID: React.Dispatch<any>,
    setError: React.Dispatch<any>
}

export default function Home({user_props}:any) {

  
  const handleDeco = (e: any) => {
    document.cookie = `token=;`; 
    location.reload();
  }

  console.log(user_props);
  return (
    <div>
      <h1>Hello {user_props.username}</h1>
          <button className="deco-btn" 
          onClick={handleDeco}
                  >Deconnection
          </button>
    </div>
  )
}   
import React, { useState, useEffect } from 'react';

interface FormPropsInterface {
    setID: React.Dispatch<any>,
    setError: React.Dispatch<any>
}

export default function Home({username}:any) {
  

  const handleDeco = (e: any) => {
    document.cookie = `token=;`; 
    location.reload();
  }

  return (
    <div>
      <h1>Hello {username}</h1>
      <button className="deco-btn" 
      onClick={handleDeco}
              >Deconnection
      </button>
    </div>
  )

}   
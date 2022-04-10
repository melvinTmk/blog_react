import React, { useState, useEffect } from 'react';

interface FormPropsInterface {
    setID: React.Dispatch<any>,
    setError: React.Dispatch<any>
}

export default function Home({user_props}) {

  
  const handleDeco = (e: any) => {
    e.preventDefault();
    document.cookie = `token=;`;
  }

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
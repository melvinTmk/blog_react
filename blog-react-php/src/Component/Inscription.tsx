import React, { useState, useEffect } from 'react';

interface FormPropsInterface {
    setID: React.Dispatch<any>,
    setError: React.Dispatch<any>
}

export default function Inscription({setID, setError}:FormPropsInterface) {
    const [userNameInput, setUserNameInput] = useState<string>('');
    const [passWordInput, setPassWordInput] = useState<string>('');


    const handleChangeUserNameInput = (e: any) => {
        const {value} = e.target;
        setUserNameInput(value);
    }
    const handleChangePassword = (e: any) => {
        const {value} = e.target;
        setPassWordInput(value);
    }  
    const handleSubmitForm = (e: any) => {
      e.preventDefault();
      const params = `username=${passWordInput}&password=${userNameInput}`;

      const headers = new Headers({ 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa('username:password')}`
      });

      fetch('http://localhost:2345/Controller/Register.php', {
        method: 'POST',
        body: params,
        headers: headers,
        mode: 'cors',
        credentials: 'include'
      }) 
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          if(!data.error) {
            setID({username: data.username, password: data.password, token: data.token});
            setError('');
            document.cookie = `token=${data.token};`;
            location.reload();
          } else {
            setError(data.error);
          }
        }
      )  
    } 
 
    return (
        <form className="form-inscription" onSubmit={handleSubmitForm}>
            <div className="form-inscription-options">
            <label>First name:</label>
            <input type="text" 
                    className="form-inscription-fname" 
                    name="fname" 
                    placeholder="John"
                    value={userNameInput}
                    onChange={handleChangeUserNameInput}>
            </input>
            </div>
            <div className="form-inscription-options">
            <label>Password:</label>
            <input type="text" 
                    className="form-inscription-lname" 
                    name="lname" 
                    placeholder="Doe"
                    value={passWordInput}
                    onChange={handleChangePassword}>
            </input>
            </div>
            <input type="submit" 
                    className="form-inscription-submit" 
                    value="Submit">
            </input>

        </form>
    )
}
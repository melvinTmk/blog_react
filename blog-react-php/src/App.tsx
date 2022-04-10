import React, { useState, useEffect } from 'react';
import Inscription from './Component/Inscription';
import './App.css';
import Home from './Component/Home';
import Post from './Component/Post';

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function App() {
  const [id, setID] = useState<Object>({}); 
  const [error, setError] = useState<string>('');  
  var [posts, setPosts] = useState({});

  useEffect( () => {
    const headers = new Headers({ 
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    fetch('http://localhost:2345/Controller/Post.php', {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      credentials: 'include'
    }) 
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPosts(data); 
      }
    )  
  }, [])



  if(getCookie('token') && getCookie('token') != "") {
    return (
      <>
      <Home username={getCookie('username')}></Home>
      {posts.post.map((element: { id: any; }) => (
          <Post key={element.id} props={{element}}/>
      ))}
      </>
    )
  } 
  if(posts.post) {
    return (
      <div className="App">
        <Inscription setID={setID} setError={setError}></Inscription>
        <p className='error-msg'>{error}</p>
          {posts.post.map((element: { id: any; }) => (
              <Post key={element.id} props={{element}}/>
          ))}
      </div>
    ) 
  } else {
    return (
      <div className="App">
        <Inscription setID={setID} setError={setError}></Inscription>
      </div>
    ) 
  }
}   

export default App;

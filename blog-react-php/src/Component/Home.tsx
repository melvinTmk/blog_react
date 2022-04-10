import React, { useState, useEffect } from 'react';
import Post from './Post';

interface FormPropsInterface {
    setID: React.Dispatch<any>,
    setError: React.Dispatch<any>
}

export default function Home({username}:any) {
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



  const handleDeco = (e: any) => {
    document.cookie = `token=;`; 
    location.reload();
  }

  if(posts.post) {
    return (
      <div>
        <h1>Hello {username}</h1>
        <button className="deco-btn" 
        onClick={handleDeco}
                >Deconnection
        </button>
        {posts.post.map((element: { id: any; }) => (
            <Post key={element.id} props={{element}}/>
        ))}
      </div>
    )
  } else {
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

}   
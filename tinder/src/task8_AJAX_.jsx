import React,{useState, useEffect} from 'react'
import axios from 'axios'
function GetRequest () {
  const [posts, setPosts] = useState([])
  const [errorMsg, setError] = useState([])


  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        setPosts(response.data)
      })
      .catch(error => {
        console.log(error);
        setError('Error retreiving data')
      })
  }, [])

    return (
      <div>
        List of posts
        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.title}</div>) :
          null
        }
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )

}

function PostRequest () {
  const [userId, setUserId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  let changeUserId = e => {
    setUserId(e.target.value);
  }
  let changeTitle = e => {
    setTitle(e.target.value);
  }
  let changeBody = e => {
    setBody(e.target.value)
  }

  let submitHandler = e => {
    e.preventDefault()
    console.log({userId, body, title});
    axios
         .post('https://jsonplaceholder.typicode.com/posts', {userId, title, body})
         .then(response => {
           console.log(response);
         })
         .catch(error => {
           console.log(error);
         })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input type = 'text' 
          name = 'userId' 
          value={userId} 
          onChange={changeUserId}></input>
        </div>
        <div>
          <input type = 'text' 
          name = 'title' 
          value={title}
          onChange={changeTitle}>
          </input>
        </div>
        <div>
          <input type = 'text' 
          name = 'body'
          value={body}
          onChange={changeBody}>
          </input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export {GetRequest, PostRequest}

import React,{useState,useEffect} from 'react'
const url='https://jsonplaceholder.typicode.com/users'
const url1='https://jsonplaceholder.typicode.com/posts'
const Form=()=>{
    const [data,setData]=useState([]);
    const[user,setUser]=useState({id:'',title:'',body:''});
    const getUsers=async()=>{
        const response=await fetch(url);
        const users=await response.json();
        setData(users);
        // console.log(data);
    }
    const display=async(id)=>{
        // const response=await fetch(url1);
        // const posts=await response.json();
        // console.log(posts);
        // const post=posts.filter((p)=>{
        //     if(p.id===id) return p; 
        // })
        // console.log(post);
        // if(post.length>0){
        // alert(` title:${post[0].title} body:${post[0].body}`);
        fetch(url1).
        then(response=>response.json()).
        then(posts=>posts.forEach((post)=>{
            if(post.id===id){
                alert(`title: ${post.title} body: ${post.body}`)
            }
        }))
    
    }
    useEffect(()=>getUsers(),[])
    return (
      <form className="form">
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={user.title}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            name="body"
            value={user.body}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
        </div>
        <label htmlFor="user">
          <select
            name='id'
            onChange={(e)=>{
                e.preventDefault()
                setUser({...user,[e.target.name]:e.target.value})
                display(parseInt(e.target.value))}}
          >
            {data.map((user) => {
              return <option name='id' key={user.id} value={user.id}>{`name: ${user.name}`}</option>;
            })}
          </select>
        </label>
        <button type="submit" onClick={() => console.log("submitted")}>
          Submit
        </button>
      </form>
    );
}

export default Form;
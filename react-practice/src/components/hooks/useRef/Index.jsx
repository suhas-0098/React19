import "./Index.css"
import { useRef } from "react";
export const Index=() =>{
  
 const username = useRef(null);
  const password = useRef(null);

  //   console.log(username);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="username">username</label>
      <input type="text" id="username" ref={username} />
      <br />
      <label htmlFor="password">password</label>
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
}
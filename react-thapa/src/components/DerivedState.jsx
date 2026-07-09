import { useState } from "react"

export const DerivedState = () =>{

  const [users,setUsers] = useState([
    {name:"Alice",age:25},
     {name:"Bob",age:20},
      {name:"Charlie",age:35}
  ]);

  let userCount = users.length;
 
  let sum =0;
  for(let i =0;i<users.length;i++){
     sum = sum +users[i].age
  }
   let averageAge = sum/userCount;

  return (<>
  
  <h1>Users List</h1>
  <ul>
    {users.map((user,index)=>(
       <li key={index}>
            {user.name} - {user.age} years old
       </li>
    ))}
  </ul>
  <p>Total Users : {userCount}</p>
  <p>Average Age : {averageAge}</p>
  </>)
}
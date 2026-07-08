import { WelcomeUser } from "./WelcomeUser"

export const EventProps =()=>{

  const handleWelcomeUser = (user) =>{
    alert(`Hey, ${user} Welcome`);
  }

    const  handleHover = () =>{
    alert(`Hey, Thanks for hovering`);
  }
  return (<>

   <WelcomeUser onClick={()=> handleWelcomeUser("suhas")} onMouseEnter={handleHover}/>
  
  </>)
}
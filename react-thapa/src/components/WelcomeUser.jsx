export const WelcomeUser = (props) =>{

  const handleGreeting = () =>{
     console.log("Welcome")
     props.onClick();
  }

  return (<>

<button onClick={props.onClick}>click</button>
<button onMouseEnter={props.onMouseEnter}>Hover me</button>
<button onClick={handleGreeting}>Greeting</button>

  </>)
}
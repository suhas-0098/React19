import { Link } from "react-router"

function NotFound (){
return (
  <div>
    <h1>Not Found</h1>
    <p>Sorry, The page you are looking for does not exit</p>
    <Link to="/">go to home</Link>
  </div>

)
}
export default NotFound
import { Link, Route } from 'react-router-dom';
import About from './header pages/About';

function Appheader()
{
    return(
    <div>
    <h1>Professional Academy check</h1> 
    <ul>
     <li><Link to="/about">About Us</Link></li>
     <li><Link to="/contact">Contact Us</Link></li>

     </ul>   
     <Route path="/about" component= {About}/>
     <Route path="/contact" component= {Contact}/>
     </div>
    );

}


function Contact()
{
    return(
  <>
   <h1>Contact Us Page</h1>
  </>)
}

export default Appheader;
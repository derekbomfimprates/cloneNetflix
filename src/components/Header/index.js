import react from "react";
import "./Header.css";

export default ({color}) =>{
    return( 
<header className={color ? 'color' : ''}>
    <div className="header--logo">
        <a href="/">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix" />
   </a> 
   </div>
   <div className="header--user">
   <a href="/">
        <img src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt="Netflix" />
   </a> 
   </div>
</header>
    );
}
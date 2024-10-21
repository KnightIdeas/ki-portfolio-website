import React from "react";
import { useNavigate } from 'react-router-dom';

const LinkButton = ({ to, external, children, className }) => {
 const navigate = useNavigate();

 const handleClick = () => {
    if (external) {
        window.location.href = to;
    }
    else {
        navigate(to);
    }
 }
 
    return ( 
        <button onClick={handleClick} className={className}>
      {children}
    </button>
     );


}
 
export default LinkButton;
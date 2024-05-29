import React from "react";
import GithubLogo from "./img/Github.svg";
import "../src/sass/style.css";


const Header = () =>{
  return(
    <>
    <div>
         <a 
         className="github-icon"
         href="https://github.com/anshum12345"
         target="_blank"
         rel="noreferrer"
         >
          <img 
          className="github-icon"
          style = {{
            position: "absolute",
            left:"5px",
            top:"5px",
            height:"3rem",
            width:"3rem",
            // backgroundcolor:"red",
            padding:"3px",
            cursor:"pointer",
          }}

          src={GithubLogo}
          alt="github-icon"
          />
         </a>

         <strong>
          <h2
          className="heading-name"
          style = {{
            background:"none",
            marginBottom:50,
            color:"#333",
            textAlign:"center",
            textShadow:"2px 2px 3px #b0b0b0",
          }} 
          >
         Books for Book lovers
          </h2>
         </strong>
    </div>
  
    </>
  )
}


export default Header;
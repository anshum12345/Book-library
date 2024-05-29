import React from "react";
import { motion } from "framer-motion";

import "../src/sass/style.css";
import defaultBook from "./img/defaultBook.png";
import { BiLinkExternal } from "react-icons/bi";


const Book = ({id, volumeInfo}) =>{
  const imageVarients = {
    hover:{
     scale:1.3,
     boxShadow: "0px 0px 8px #000",
     transition:{
      duration:0.5,
      type:"spring",
      delay:0.15,
     },
    },
  };

  let {title, authors, publisher, previewLink, imageLinks} = volumeInfo;


    // setting up default values for volume info data
    title = title || "Title is not available";
    authors = authors || "Author(s) name not available";
    publisher = publisher || "Publisher company not available";
    previewLink = previewLink || "https://books.google.co.in/";
    
  return(
    <section key={id} className="loading-card">

      {/* for image */}
      <div>
        <motion.img 
        src={imageLinks ? imageLinks.thumbnail : defaultBook}
        width="100px"
        alt="book-cover"
        varients={imageVarients}
        whileHover="hover"
        />
      </div>

   {/* for title  */}
    <div>
      {title && (
        <div>
          <h3 className="inline" >{title}</h3>
          </div>
      )}
    </div>

 {/* for authors */}
     <div>
  {authors && (
    <h4 style = {{paddingBottom: "1rem" , color: "black"}}>
      {" "}
      Author Name:{" "}
      <span
      style={{
        fontWeight:"bold",
        color:"blue",
      }}
      >
        {" "}
        {authors}{" "}
      </span>
    </h4>
  )}
     </div>

    {/* for publisher */}
    <div>
      {publisher && (
      <h5 style={{paddingBottom:"1rem", color:"black",}}>
        {" "}
        Published BY:{" "}
        <span 
        style={{
          fontWeight:"bold",
          color:"blue",
        }}
        >
          {" "}
          {publisher}{" "}
        </span>

      </h5>
      )}
    </div>

    {/* previewlink */}
    <div>
      {previewLink && (
      <h5 style={{
        fontWeight:"bold",
        color:"black",
        paddingBottom:"1rem",
      }} >
        Read more:{" "}
        <a href={previewLink} target="_blank" rel="noreferrer">
          {" "}
          Google Books <BiLinkExternal></BiLinkExternal>{" "}

        </a>

    
      </h5>
      )}
    </div>


    </section>
  );
};

export default Book;
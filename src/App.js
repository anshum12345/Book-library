import React from "react";
import Header from "./header";
import Books from "./books";
import ScrollToTop from "./scrolltotop";
import "./sass/style.css"
const App = () =>{
  return(
    <div>
      <Header></Header>
      <Books></Books>
      <ScrollToTop></ScrollToTop>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
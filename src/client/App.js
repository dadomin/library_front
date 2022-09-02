import React from "react"
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import Tab from './Tab';

const App =(props) =>{
  const tab = props.tab;
  return (
    <>
      <Header/>
      <h1>hi</h1>
      <Footer/>
    </>
  )
}

export default App;

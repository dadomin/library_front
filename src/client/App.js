import React from "react"
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';
import Tab from './Tab';

const App =(props) =>{
  const tab = props.tab;
  return (
    <>
      <Header/>
      <Tab tab={tab}/>   
      <Footer/>
    </>
  )
}

export default App;

import React from 'react';
import Navbar from './navbar'
import "../css/Department_css.css"
import {Level1_expansion,Level2_expansion} from './Department_javascript'
import PdfView from "./pdfView";
import image from "../right_arrow_small.png";
import Header from './header';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';

export default class Department extends React.Component {
  state={link:""}
  handleClick=value=>()=>{
    sidenavbar();
    this.setState({link:value});

       };
    render(){
                  window.scrollTo(0,0);

        return (<div id='mainBody'>

          <i style={{fontSize:'30px'}} class='fa fa-bars burger' onClick={sidenavbar}></i>
          <i style={{fontSize:'10px',opacity:0}} class='fa fa-bars burger'  onClick={sidenavbar}></i>
                   <Header />
          <Navbar/>

        </div>)
    }
}

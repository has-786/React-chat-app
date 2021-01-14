import React from 'react';
import Navbar from './navbar'
import "../css/Department_css.css"
import {Level1_expansion,Level2_expansion} from './Department_javascript'
import PdfView from "./pdfView";
import image from "../right_arrow_small.png";
import Header from './header';
import sidenavbar from './sidenavbar';
import '../css/sidenavbar.css';
import url from './url';

export default class Recognition extends React.Component {
  state={link:""}
  handleClick=value=>()=>{
    this.setState({link:value});

       };
    render(){
                  window.scrollTo(0,0);

        return (<div id='mainBody'>
          <Header />
          <Navbar/>

        <section class="New_Department row" >
        <i style={{fontSize:'30px'}} class='fa fa-bars burger'  onClick={sidenavbar}></i>

            <nav class="side_navigation col-lg-3 col-md-3 mysidenavbar">


                <ul class="list-group sidenav_list"  >
                    {/*Department 1 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list" onClick={e=>Level1_expansion('preClinicalSubitem')} ><img src={image}  ></img>UG Recognition</a></li>
                    {/*Level 2 */}
                    <li><a style={{paddingLeft:'30px'}} class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={(evt)=>{sidenavbar(evt);this.handleClick(url+'/uploads/Recognition_mbbs.pdf'); }}><i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Recognition for MBBS Course</a></li>
                    <li><a style={{paddingLeft:'30px'}} class="list-group-item list-group-item-action level2 preClinicalSubitem" data-toggle="list" href="#Info1" onClick={(evt)=>{sidenavbar(evt);this.handleClick(url+'/uploads/Recognition_bpmt.pdf'); }}><i style={{color:'green'}} class='fas fa-angle-right'></i>&nbsp;Recognition for BPMT Course</a></li>

                    {/*Department 2 Level1 */}
                    <li><a class="list-group-item list-group-item-action level1" data-toggle="list"  onClick={(evt)=>{sidenavbar(evt);this.handleClick(url+'/uploads/PG recognition.pdf'); }}><img src={image}></img>PG Recognition</a></li>
                    {/*Level 2 */}

                </ul>
            </nav>

          <article class="col-lg-8 col-md-8">
            <header id="article_heading">Recognition</header>
            <br></br>
            <div class="tab-content">
            <div class="tab-pane fade col-lg-9 " id="Info1" >
                <PdfView link={this.state.link}/>
            </div>
            </div>
        </article>

        </section>



        </div>)
    }
}

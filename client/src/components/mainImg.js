import React from 'react';
import '../css/mainImg_css.css';
import {Link} from 'react-router-dom';
export default class MainImg extends React.Component {
  render(){
        return (<div>

<div id="demo" class="carousel slide" data-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/img/s1.jpg"/>
      <div class="text1" >
        <Link to='/appointment' ><p class='checkup'>Need A Doctor for Check-up?</p></Link>
        <Link to='/appointment' class='aptbutton'><button class='aptbutton'>Get an appointment</button></Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/assets/img/s2.jpg"/>
      <div class="text1">
        <Link to='/appointment'><p class='checkup'>Need A Doctor for Check-up?</p></Link>
        <Link to='/appointment' class='aptbutton'><button >Get an appointment</button></Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/assets/img/s2.jpg"/>
      <div class="text1">
        <Link to='/appointment'><p class='checkup'>Need A Doctor for Check-up?</p></Link>
        <Link to='/appointment' class='aptbutton'><button class='aptbutton'>Get an appointment</button></Link>
      </div>
    </div>
  </div>


  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>


</div>)
    }
}

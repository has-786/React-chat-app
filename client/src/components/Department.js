import React from 'react';
import Navbar from './navbar'
import "../css/Department_css.css"

export default class Department extends React.Component {

    render(){
        return (<div ><Navbar/>
        <section class="New_Department row">

            <nav class="side_navigation col-lg-3">
                <ul class="list-group sidenav_list">
                    <li><a class="list-group-item list-group-item-action active" data-toggle="list" href="#Info1">Item 1</a></li>
                    <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info2">Item 2</a></li>
                    <li><a class="list-group-item list-group-item-action" data-toggle="list" href="#Info3">Item 3 </a></li>
                </ul>
            </nav>
            <article class="col-lg-9">
            <header id="article_heading"> Departments</header>
            <br></br>
            <div class="tab-content">
            <div div class="tab-pane fade show active " id="Info1" >Information 1</div>
            <div div class="tab-pane fade" id="Info2" >Information 2</div>
            <div div class="tab-pane fade" id="Info3" >Information 3</div>
            </div>
                </article>

        </section>



        </div>)
    }
}

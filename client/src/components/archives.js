import Navbar from './navbar';
import React from 'react';
import url from './url';
import '../css/home.css';
import Footer from './footer';
import Header from './header';

export default class Archives extends React.Component
{
    constructor(props){
      super(props);
      this.state={  }
    }

    componentDidMount(){
      window.scrollTo(0,0);

    }



render(){
	return <div   id='mainBody'>
  <Header />

			 <Navbar />
       <section id="departments" class="departments">
         <div class="container">

           <div class="section-title">
             <h2>Archives</h2>
             <p>Archived Details</p>
           </div>
          </div>
        </section>
        <Footer/>
	</div>
}

}

import SideNavBarDept from "./sidenavbar_dept";
import PdfDisplayDept from "./pdfdisplay_dept";
import "./css/main.css";
import React from 'react';
export default class Department extends React.Component{

  constructor(props){
    super(props);
    this.state={
      pdfs:[{id:'ana',link:'http://www.bjmcpune.org/ANATOMY.pdf'},{id:'physio',link:'http://www.bjmcpune.org/ANATOMY.pdf'}],
      link:""
    }
    this.changePDF=this.changePDF.bind(this);
  }

  render(){
    return <div class="conatiner-fluid">
    <div class="row">
    <div class="col-lg-4 sidenavbar" id="sidenav"><SideNavBarDept changePDF={this.changePDF}/></div>
    <div class="col-lg-8 pdfdisplay" id="pdfdisplay"><PdfDisplayDept link={this.state.link}/></div>
    </div>
    </div>;
}

 changePDF(id)
{
//  alert(id);
    this.setState({link:this.state.pdfs.find(p=>p.id==id).link});
}

}

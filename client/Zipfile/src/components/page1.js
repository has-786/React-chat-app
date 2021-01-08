
import React, { Component } from 'react'
import '../css/page2.css';

export default class Page1 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            show:[],
            participants:[],
            candidates:[],
            selectCount:0,
            search:''
        }
      }

      componentDidMount(){

        const participants=JSON.parse(localStorage.getItem('betParticipants'));
        if(participants)this.setState({participants})


          fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json',{ method:'GET'})
                 .then(response=>{ return response.json()})
                 .then((body)=>{
                      //localStorage.removeItem('betParticipants');
                   //alert(JSON.stringify(body.awards))
                        this.setState({candidates:body});
                        var arr=this.state.candidates;
                        arr.map(c=>{c.Price=parseFloat(c.Price); c.winnings=0; c.fate="";c.selected=false;
                                          const obj=this.state.participants.find(p=>p.Name==c.Name);
                                          if(obj)c.selected=true;
                              })
                        this.setState({candidates:arr,show:arr,selectCount:this.state.participants.length});
                  })
                 .catch(err=>{});
      }


      selectCandidates(evt,ind){
      //  alert(evt.target);
        if(evt.target.checked)
        {
          if(this.state.selectCount==9){alert('Already 9'); evt.target.checked=false;}

          else
          {
            this.setState({
                          selectCount:this.state.selectCount+1,
                           participants:this.state.participants.concat(this.state.candidates[ind])
                        });
              this.state.candidates[ind].selected=true;
              this.state.show[ind].selected=true;
              this.state.selectCount++;
            //  alert(this.state.selectCount);

              setTimeout(()=>{
                localStorage.setItem('betParticipants',JSON.stringify(this.state.participants));
              },300)
          //  alert(this.state.participants)

          }
        }
        else
         {
          this.setState({
                        selectCount:this.state.selectCount-1,
                        participants:this.state.participants.filter(p=>p.Name!=this.state.candidates[ind].Name),
                     });
                     this.state.candidates[ind].selected=false;
                     this.state.show[ind].selected=false;
                     this.state.selectCount--;
                  //   alert(this.state.selectCount);

                    setTimeout(()=>{
                          localStorage.setItem('betParticipants',JSON.stringify(this.state.participants));
                        },300)
         }

      }



    handleSearch(evt){
      this.setState({search:evt.target.value});
      setTimeout(()=>{
        if(this.state.search=='')this.setState({show:this.state.candidates});
        else {
          this.setState({show:this.state.candidates.filter(c=>c.Name.toLowerCase().includes(this.state.search.toLowerCase())) });
         }
      },100)
    //  alert(this.state.search+' '+evt.target.value);

    }

      render()
      {
        return   <div>
            <section class="New_Department row">


              <nav class="side_navigation col-lg-3">
              <img src='dice.jpg' width="200px" height='200px'/>
              <br />
              <p style={{font:'sans-serif',fontSize:'15px',float:'left'}}>Playing 9</p>

                  <ul class="list-group sidenav_list">
                  {
                    this.state.participants.map((c,ind)=>{
                      return <li><a class="list-group-item list-group-item-action" data-toggle="list">
                      <img src={c["Profile Image"]} height="100px" width="100px"/>&nbsp;&nbsp;
                                {c.Name}<br></br>
                                <img src="ball.jpg" width='50px' height='30px'/>&nbsp;{c.Bet} &nbsp; &nbsp;
                                <img src="tropy.png" width='30px' height='30px'/>&nbsp;{c.Price}<br></br>
                                </a>
                      </li>
                    })
                  }
                  </ul>
                  <br /><br />
                  <center><button class='btn btn-primary startbtn'
                                  onClick={()=>{
                                    if(this.state.selectCount<9)alert('Select 9 players');
                                    else this.props.history.push('/page2')
                                 }}
                   > START</button></center>

              </nav>

              <article class="col-lg-9">
              <br/><br/><br/><br/>
              <header id="article_heading">Select Playing 9</header>
              <br/>
              <div class="md-form active-cyan active-cyan-2 mb-3">
                <input class="form-control" type="text" placeholder="Search Players" aria-label="Search" value={this.state.search} onChange={this.handleSearch.bind(this)}/>
              </div>
                <br/>
              <div class="tab-content">
                <div  class="tab-pane fade show active">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover table-striped">
                          <thead>
                           <tr>
                            <th>Select</th>
                            <th>Player Name</th>
                            <th>Avatar</th>
                            <th><img src="ball.jpg" width='50px' height='30px'/>&nbsp;Bet</th>
                            <th><img src="tropy.png" width='30px' height='30px'/>&nbsp;Price</th>
                           </tr>
                         </thead>
                         <tbody>
                            {
                                this.state.show.map((c,ind)=>{
                                return <tr>

                                <td><input type='checkbox' id={'select'+(ind)} onClick={(evt)=>this.selectCandidates(evt,ind)} checked={c.selected}/></td>
                                <td>{c.Name}</td>
                                <td><img src={c["Profile Image"]} height="100px" width="100px" alt='not found'/></td>
                                <td>{c.Bet}</td>
                                <td>{c.Price}</td>

                                </tr>})
                            }
                          </tbody>
                       </table>
                     </div>

                    </div>

                </div>


      </article>
      </section>
      </div>


      }
  }

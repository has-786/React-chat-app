import React, { Component } from 'react'
import '../css/page2.css';


export default class Page2 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            participants:[],
          random:0
        }
      }

      componentWillUnmount(){
        localStorage.removeItem('betParticipants');
      }

      componentDidMount(){
        const participants=JSON.parse(localStorage.getItem('betParticipants'));

        if(!participants || participants.length<9)this.props.history.push('/');

                      this.setState({participants})
                      const r=Math.floor(Math.random()*10);
                      this.setState({random:Math.min(r+1,9)});

                          setTimeout(()=>{

                            var arr=this.state.participants;

                             arr.map((p,ind)=>{

                                if(ind==this.state.random-1){
                                  alert(p.Price);
                                  p.Price*=2;
                                  p.winnings++;
                                  p.fate='Winner';
                                }
                                else {p.fate='Loser';p.Price=0;}

                            })
                          this.setState({participants:arr});

                          localStorage.setItem('betParticipants',JSON.stringify(arr));
                        },1000);

      }

      render()
      {
        return  <div>

        <section class="New_Department row">
            {
            this.state.participants.slice(0,5).map((c,ind)=>{
            return   <div class='col-lg-2' style={{padding:'10px',margin:"0px 20px 0px 20px"}}>
                <div style={{border:'2px solid brown',borderRadius:'20px'}} >
                  <div>
                    <img class='cards' src={c["Profile Image"]} height="120px" />
                  </div>
                  <div>
                  <h5  class='cards' >{c.Name}</h5>

                  </div>
                  <br />
                  <div>
                    <center>
                    <p   class='cards' ><img src="ball.jpg" width='50px' height='30px' />&nbsp;{c.Bet}</p>
                    <p  class='cards'><img src="coin.jpg" width='20px' height='20px' />&nbsp;&nbsp;&nbsp;&nbsp;{c.Price}</p>
                    </center>
                  </div>
                  <br />
                  <div>
                    <p ><img src="tropy.png" width='50px' height='50px'/>&nbsp;{c.winnings}</p>
                  </div>
                  <br />
                  <br />


                  <center><button class='btn btn-danger' style={{borderRadius:'30px',paddingBottom:'0px'}}>{c.fate}</button></center>
                </div>
              </div>
            })
          }
          <div class='col-lg-12'>  <center><button class='mybigbtn'>{this.state.random}</button></center></div>
            <br />
          {  this.state.participants.slice(5,9).map((c,ind)=>{
            return   <div class='col-lg-2' style={{padding:'10px',margin:"0px 20px 0px 20px"}}>
                <div style={{border:'2px solid brown',borderRadius:'20px'}} >
                <div>
                  <img class='cards' src={c["Profile Image"]} height="120px" width="60%"/>
                </div>
                <div>
                <h5  class='cards' style={{width:'40%'}}>{c.Name}</h5>

                </div>
                  <br />

                  <div><center>
                    <p   class='cards'><img src="ball.jpg" width='50px' height='30px' />&nbsp;{c.Bet}</p>
                    <p  class='cards'><img src="coin.jpg" width='20px' height='20px'/>&nbsp;&nbsp;&nbsp;&nbsp;{c.Price}</p>
                    </center>
                  </div>
                  <br />
                  <div>
                    <p><img src="tropy.png" width='50px' height='50px' />&nbsp;{c.winnings}</p>
                  </div>
                  <br />

                  <center><button class='btn btn-danger' style={{borderRadius:'30px',paddingBottom:'0px'}}>{c.fate}</button></center>
                </div>
              </div>
            })
       }

      </section>
      <button class='btn btn-primary' class='mybtn' onClick={()=> this.props.history.push('/')}>Back</button>

      <br /><br /><br />

      </div>

      }
  }

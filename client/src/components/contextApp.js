import React from 'react';

const Mycontext=React.createContext("hello");


export class Contextapp extends React.Component{
    render(){
      return <Mycontext.Provider value="hi">
                <App/>
             </Mycontext.Provider>
    }
}


export class App extends React.Component{
  render(){
    static contextType = ThemeContext;

    return <div>
              {this.context}
           </div>
  }
}

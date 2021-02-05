import React from 'react'
import Quotes from './Quotes'
import './App.css'
  
class App extends React.Component{
    state={
        author:"Thomas Edison",
        text: "Genius is one percent inspiration and ninety-nine percent perspiration."
    }
    onClickButton= ()=>{
         Quotes().then((data)=>{ this.setState({author:data.author,text:data.content})})
           
    }

    render(){
        return (
            <div className="ui container main">
                 <h1 className="ui header head">Random Quote Generator</h1>
                 <div className="ui card box">
                    <div className="content">
                        <div className="header">{this.state.author}</div>
                        <div className="description">
                        <p>{this.state.text}</p>
                        {/* <p>Many people also have their own barometers for what makes a cute dog.</p> */}
                        </div>
                    </div>
                    <button className="ui button" onClick={this.onClickButton}>GENERATE NEW QUOTE</button>
                </div>
            </div>
    
        )
    }
}

export default App
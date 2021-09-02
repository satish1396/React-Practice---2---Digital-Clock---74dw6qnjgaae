import React, {Component, useState} from "react";
import '../styles/App.css';

function getTimefun(){
    let date = new Date()
    return date.toLocaleTimeString()
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
           time:""      
        }
    }
    componentDidMount(){
    setInterval(()=>{
        this.setState({
            time : getTimefun()
        })
    })
    }
    
    render() {
        return(
            <div>
               <h3 id="time">{this.state.time}</h3>
            </div>
        )
    }
}


export default App;

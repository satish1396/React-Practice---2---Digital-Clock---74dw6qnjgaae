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
           time:getTimefun()      
        }
    }
    componentDidMount(){
        this.unmount=setInterval(()=>{
            this.setState({
                time : getTimefun()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.unmount)
    }
    
    render() {
        return(
            <div className="Clock">
               <h3 id="time">{this.state.time}</h3>
            </div>
        )
    }
}


export default App;

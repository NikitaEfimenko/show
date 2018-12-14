import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Label,
  Input
} from 'reactstrap'


const Modal = ({is, off, children}) => {
    return (     
         is &&  
          <div className='my-modal my-modal_content-container'>  
            <p className='my-modal_cross' onClick={off}> X </p>  
            {children}
          </div> 
        
    )
} 


const MyComp = () => {
  return (
      <div>
        <Label> кто ты ? </Label>
        <Input/>
        <Button > ok </Button>
      </div>
  )
} 


class Counter extends Component {
  state = {
    count: 0
  }
  inc = () => {
    this.setState({
      count: ++this.state.count
    })
  }
  dec = () => {
    this.setState({
      count: --this.state.count
    })
  }
  render() {
    return(
      <div>
        <p> {this.state.count} </p>
        <Button onClick={this.inc}> + </Button>
        <Button onClick={this.dec}> - </Button>
      </div>
     )
  }
}

class App extends Component {
  state = {
    is: false
  }

  on = () => {
    this.setState({
      is: !this.state.is
    })
  }
  off = () => {
    this.setState({
      is:false
    })
  }

  render() {
    return (
      <div className='container'>
        <Button onClick={this.on} > polling </Button>
        <Modal  is={this.state.is}  off={this.off}>
          <div>
            {[...Array(2).keys()].map(id => <Counter key={id} />)}
            {[...Array(3).keys()].map(id => <MyComp key={id} />)}
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;

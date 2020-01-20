import React, { Component } from 'react';
import './App.css';
import Form from './form.js';
import Output from './output.js';
import Name from './name.js';
import Position from './position.js';
import LayoutTwo from './layout2.js'
import Company from './company.js'
import Project from './project.js'


class App extends Component {

  state = {
    info: [
      { 
        recipient: "John Smith",
        name: "Derek",
        title: "web developer",
        company: "Google",
        experience: "My most recent project involved developing a new website for Jelka Seals Limited. I was responsible for the entire development process, from planning and the design stage to coding the front end using best practices." 
      }
    ],
    condition: true
  } 


  handleClick(condition) {
    this.setState( { condition } )
  }

  name = (e) => {
    this.setState({ info: [
        { ...this.state.info[0], recipient: e.target.value }
      ] 
    })    
  }

  myName = (e) => {
    this.setState({ info: [
        { ...this.state.info[0], name: e.target.value }
      ] 
    })    
  }  

  title = (e) => {
    this.setState({ info: [
        { ...this.state.info[0], title: e.target.value }
      ] 
    })    
  }  

  companyName = (e) => {
    this.setState({ info: [
        { ...this.state.info[0], company: e.target.value }
      ] 
    })    
  }    

  experience = (e) => {
    this.setState({ info: [
        { ...this.state.info[0], experience: e.target.value }
      ] 
    })    
  }    
   
  render(){
    const { condition } = this.state;
    return (
      <div>

       <div className="header">
         <h1>Cover Letter Builder</h1>
         <p>Tired of writing new cover letters for each job application? Fill out the form below and have a custom cover letter ready for any job!</p>
       </div>  

       <div className="everything">
         <div className="input">
           <div className="form">
             <Form name={ this.name } val={this.state.info[0].recipient}/>
             <Name input={ this.myName } val={this.state.info[0].name}/>
             <Position name={ this.title } val={this.state.info[0].title}/>
             <Company name={this.companyName} val={this.state.info[0].company}/>
             <Project name={this.experience} val={this.state.info[0].experience}/>
           </div>  
           <div className="buttons">        
             <button onClick={() => this.handleClick(true)}>Layout 1</button>
             <button onClick={() => this.handleClick(false)}>Layout 2</button>
           </div>
         </div>
         <div className="output">
           {condition === true ? <Output text={this.state.info[0].recipient} names={this.state.info[0].name} titles={this.state.info[0].title} company={this.state.info[0].company} experience={this.state.info[0].experience}/> 
           : <LayoutTwo text={ this.state.info[0].recipient } names={ this.state.info[0].name } titles={ this.state.info[0].title } company={this.state.info[0].company} experience={this.state.info[0].experience}/>}
         </div>
       </div>

       <div className="footer">
         <hr/>
         <p>Made by <a href="https://www.derekshigetomi.com/" target="_blank">Derek Shigetomi</a></p>
       </div>

      </div>
    );
  };
}

export default App;

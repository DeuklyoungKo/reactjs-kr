import React, { Component } from 'react';
import './App.css';
import TOC from './component/TOC';
import Content from './component/Content';
import Subject from './component/Subject';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: {title:'WEB', sub:'World Wide Web!'},
            contents:[
                {id:1, title:'HTML', desc:"HIML is for information"},
                {id:2, title:'CSS', desc:"CSS is for design"},
                {id:3, title:'JavaScript', desc:"JavaScript is for interactive"},
            ]
        }

    }

  render(){

        const subjects = {...this.state.subject};

    return (
      <div className="App">
        <Subject
            {...subjects}
        />
        <TOC
            data={this.state.contents}
        />
        <Content
        title="HTML"
        desc="HTML is HyperText Markup Language."
        />
      </div>
    );
  }
}

export default App;

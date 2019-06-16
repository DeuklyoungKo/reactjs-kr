import React, { Component } from 'react';
import './App.css';
import TOC from './component/TOC';
import Content from './component/Content';
import Subject from './component/Subject';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            subject: {title:'WEB', sub:'World Wide Web!'},
            welcome: {title:'Welcom', desc:'Hello, React!!!'},
            contents:[
                {id:1, title:'HTML', desc:"HIML is for information"},
                {id:2, title:'CSS', desc:"CSS is for design"},
                {id:3, title:'JavaScript', desc:"JavaScript is for interactive"},
            ]
        }

    }

  render(){

        console.log('App Render');

        let _title, _desc = null;

        if ( this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if( this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc
        }

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
        title={_title}
        desc={_desc}
        />
      </div>
    );
  }
}

export default App;

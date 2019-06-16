import React, {Component} from 'react';
import './App.css';
import TOC from './component/TOC';
import Content from './component/Content';
import Subject from './component/Subject';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            subject: {title:'WEB', sub:'World Wide Web!'},
            welcome: {title:'Welcom', desc:'Hello, React!!!'},
            contents:[
                {id:1, title:'HTML', desc:"HTML is for information"},
                {id:2, title:'CSS', desc:"CSS is for design"},
                {id:3, title:'JavaScript', desc:"JavaScript is for interactive"},
            ]
        }

    }


    onChangePage(e) {
        e.preventDefault();
        this.setState({
            mode: 'welcome'
        })
    }


    onChangePage2(e) {
        e.preventDefault();

        this.setState({
            mode: 'read'
        })
    }

  render(){

      const onChangePage = this.onChangePage.bind(this);
      const onChangePage2 = this.onChangePage2.bind(this);

/*      const movePage = function (e) {
          e.preventDefault();
          console.log(e);
          this.state.mode = 'welcome';
      }.bind(this);*/

      console.log('App Render');

      let _title, _desc = null;

      if (this.state.mode === "welcome") {
          _title = this.state.welcome.title;
          _desc = this.state.welcome.desc;
      } else if (this.state.mode === 'read') {
          _title = this.state.contents[0].title;
          _desc = this.state.contents[0].desc
      }

      const subjects = {...this.state.subject};

    return (
      <div className="App">

        <Subject
            {...subjects}
            onChangePage = {onChangePage}
        />

        <TOC
            data={this.state.contents}
            onChangePage = {onChangePage2}
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

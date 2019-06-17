import React, {Component} from 'react';
import TOC from './component/TOC';
import ReadContent from './component/ReadContent';
import CreateContent from './component/CreateContent';
import Subject from './component/Subject';
import Control from './component/Control';
import UpdateContent from './component/UpdateContent';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'create',
            selected_content_id: 2,
            subject: {title: 'WEB', sub: 'World Wide Web!'},
            welcome: {title: 'Welcom', desc: 'Hello, React!!!'},
            contents: [
                {id: 1, title: 'HTML', desc: "HTML is for information"},
                {id: 2, title: 'CSS', desc: "CSS is for design"},
                {id: 3, title: 'JavaScript', desc: "JavaScript is for interactive"},
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
        // console.log(e.target.dataset.id);
        this.setState({
            mode: 'read',
            selected_content_id: e.target.dataset.id
        })
    }

    onChangeMode(mode) {
        this.setState({
            mode: mode
        })
    }


    handleCreate(e) {
        e.preventDefault();
        this.onChangeMode('create');
    }

    getMaxValueOfContents(inContents, targetItem){
        const tempValue = inContents.map(key => {
            return key[targetItem];
        })
        return Math.max.apply(null, tempValue)+1;
    }

    getNewId() {
        return this.getMaxValueOfContents(
            this.state.contents,
            'id'
        )+1;
    }

    createContent(_title,_desc){
        const contents = this.state.contents.concat({id: this.getNewId(), title: _title, desc: _desc});
        this.setState({
            contents: contents
        })
    }

    getReadContent(){
        return {title : this.state.contents[this.state.selected_content_id].title,
        desc : this.state.contents[this.state.selected_content_id].desc}
    }

    getContent() {
        const createContent = this.createContent.bind(this);

        let _title, _desc, _article = null;

        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent
                title={_title}
                desc={_desc}
            />
        } else if (this.state.mode === 'read') {

            _article = <ReadContent data={this.getReadContent()} />

        } else if (this.state.mode === 'create') {

            _article = <CreateContent
                createContent={createContent}
            />

        } else if (this.state.mode === 'update') {

            _article = <UpdateContent
                createContent={createContent}
                data={this.getReadContent()}
            />

        }

        return _article;
    }

    render() {

        const onChangePage = this.onChangePage.bind(this);
        const onChangePage2 = this.onChangePage2.bind(this);
        const onChangeMode = this.onChangeMode.bind(this);
        const handleCreate = this.handleCreate.bind(this);

        const subjects = {...this.state.subject};

        /*      const movePage = function (e) {
                  e.preventDefault();
                  console.log(e);
                  this.state.mode = 'welcome';
              }.bind(this);*/

        console.log('App Render');


        return (
            <div className="App">

                <Subject
                    {...subjects}
                    onChangePage={onChangePage}
                />

                <TOC
                    data={this.state.contents}
                    onChangePage={onChangePage2}
                />

                <Control
                    onChangeMode={onChangeMode}
                    handleCreate={handleCreate}
                />

                {this.getContent()}
            </div>
        );
    }
}

export default App;

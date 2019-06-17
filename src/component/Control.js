import React, {Component} from 'react';

class Control extends Component {
    render() {

        const onChangeMode = this.props.onChangeMode;

        return (
            <ul>
                <li><a href="/create" onClick={
                    (e)=>{
                        e.preventDefault();
                        onChangeMode('create')
                    }
                    }>create</a></li>
                <li><a href="/update" onClick={
                    (e)=>{
                        e.preventDefault();
                        onChangeMode('update')
                    }
                }>update</a></li>
                <li><input type="button" value="delete"></input></li>
            </ul>

        );
    }
}

export default Control;
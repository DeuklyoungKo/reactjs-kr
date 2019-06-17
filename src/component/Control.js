import React, {Component} from 'react';

export default class Control extends Component {

    constructor(props) {
        super(props);

        // this.handleCreate = this.handleCreate.bind(this);
    }
/*

    handleCreate(e) {
        e.preventDefault();
        this.props.onChangeMode('create');
    }
*/

    handleUpdate(e) {
        e.preventDefault();
        this.props.onChangeMode('update');
    }


    render() {
/*
        const handleCreate = (e) => {
            e.preventDefault();
            this.props.onChangeMode('create');
        }


        const handleUpdate = (e) => {
            e.preventDefault();
            this.props.onChangeMode('update');
        }
*/

        const handleCreate = this.props.handleCreate.bind(this);
        // const handleCreate = this.handleCreate.bind(this);
        const handleUpdate = this.handleUpdate.bind(this);

        return (
            <ul>
                <li><a href="/create" onClick={handleCreate}>create</a></li>
                <li><a href="/update" onClick={handleUpdate}>update</a></li>
                <li><input type="button" value="delete"></input></li>
            </ul>

        );
    }
}
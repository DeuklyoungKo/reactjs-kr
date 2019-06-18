import React, {Component} from 'react';

export default class UpdateContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
    }

    handleUpdateContent(e){
        e.preventDefault();

        this.props.updateContent(
            this.props.data.id,
            e.target.title.value,
            e.target.desc.value
        );
    }


    inputFormHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

/*
    createContent(_title,_desc){
        console.log(_title, _desc);
    }*/

    render() {

        console.log('CreateContent Render');

        const handleUpdateContent = this.handleUpdateContent.bind(this);
        const inputFormHandler = this.inputFormHandler.bind(this);
        const { title, desc } = this.state;

        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                      onSubmit={handleUpdateContent}
                >
                    <p><input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={inputFormHandler}
                    /></p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={desc}
                            onChange={inputFormHandler}
                        /></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        )
    }
}
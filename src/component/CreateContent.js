import React, {Component} from 'react';

export default class CreateContent extends Component {

    handleCreateContent(e){
        e.preventDefault();

        this.props.createContent(
            e.target.title.value,
            e.target.desc.value
        );
    }
/*
    createContent(_title,_desc){
        console.log(_title, _desc);
    }*/

    render() {

        console.log('CreateContent Render');

        const handleCreateContent = this.handleCreateContent.bind(this);

        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                      onSubmit={handleCreateContent}
                >
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        )
    }
}
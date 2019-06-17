import React, {Component} from 'react';

export default class UpdateContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc
        }
    }

    handleCreateContent(e){
        e.preventDefault();

        this.props.createContent(
            e.target.title.value,
            e.target.desc.value
        );
    }


    inputFormHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeTitle(e) {
        this.inputFormHandler(e)
    }


    onChangeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }
/*
    createContent(_title,_desc){
        console.log(_title, _desc);
    }*/

    render() {

        console.log('CreateContent Render');

        const handleCreateContent = this.handleCreateContent.bind(this);
        const onChangeTitle = this.onChangeTitle.bind(this);
        const onChangeDesc = this.onChangeDesc.bind(this);
        const { title, desc } = this.state;

        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                      onSubmit={handleCreateContent}
                >
                    <p><input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={onChangeTitle}
                    /></p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={desc}
                            onChange={onChangeDesc}
                        ></textarea></p>
                    <p><input type="submit"/></p>
                </form>
            </article>
        )
    }
}
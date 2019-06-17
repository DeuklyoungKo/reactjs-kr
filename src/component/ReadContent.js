import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
        console.log('ReadContent Render');

        const { title, desc } = this.props.data

        return (
            <article>
                <h2>{title}</h2>
                {desc}
            </article>
        )
    }
}


export default ReadContent;
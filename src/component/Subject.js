import React, {Component} from 'react';

class Subject extends Component {
    render() {

        console.log('Subject Render');
        const onChangePage = this.props.onChangePage;

        return (
            <header>
                <h1>
                    <a href="/" onClick={onChangePage}>{this.props.title}</a>
                </h1>
                {this.props.sub}
            </header>

        );
    }
}

export default Subject;
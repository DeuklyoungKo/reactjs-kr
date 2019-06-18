import React, {Component} from 'react';

class TOC extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (nextProps.data === this.props.data) {
            return false;
        }

        return true;

    }

    render() {
        console.log('TOC Render');

        const data = this.props.data;

/*
        let lists = [];
        let i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}>
                            <a href={"/content" + data[i].id} onClick={this.props.onChangePage} data-id={i}>{data[i].title}</a>
                        </li>);
            i = i + 1;
        }

        console.log(data);
*/

        const listsMap = data.map((item, index) =>(
            <li key={item.id}>
                <a href={"/content" + item.id}
                   onClick={this.props.onChangePage} data-id={item.id}
                >{item.title}</a>
            </li>)
        )


        return (
            <nav>
                <ul>
                    {listsMap}
                </ul>
            </nav>
        )
    }
}

export default TOC;
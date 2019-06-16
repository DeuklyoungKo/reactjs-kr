import React, {Component} from 'react';

class TOC extends Component {
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

        const listsMap = data.map((key, index) =>(
            <li key={data[index].id}>
                <a href={"/content" + data[index].id}
                   onClick={this.props.onChangePage} data-id={index}
                >{data[index].title}</a>
            </li>)
        )

        console.log(listsMap);

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
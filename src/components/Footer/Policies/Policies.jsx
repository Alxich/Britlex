import React from 'react';

class Policies extends React.Component {
    constructor(props) {
        super(props);

        this.style = props.style;
        this.title = props.title;
        this.target = props.target;
        this.link = props.link;
    }

    render() {
        return (
            <div className={this.style.item}>
                <a href={this.link} target={this.target}>{this.title}</a>
                <span className={this.style.separator}>•</span>
            </div>
        )
    }
}

export default Policies;
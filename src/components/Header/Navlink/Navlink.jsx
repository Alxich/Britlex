import React from "react";
import {Link} from 'react-scroll';

class Navlink extends React.Component {
    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.link = this.props.link;
        this.target = this.props.target;
    }

    render() {
        return(
            <Link 
                activeClass="active" 
                to={this.link}
                spy={true} 
                smooth={true}
                className='nav-item'
                target={this.target}
            >
                {this.title}
            </Link>
        )
    }
}

export default Navlink;
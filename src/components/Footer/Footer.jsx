import React from 'react';
import Policies from './Policies/Policies';
import styles from './Footer.module.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
        this.logo = this.state.logo
    }

    render() {

        let policies = this.state.policies
            .map( (item) => <Policies style={styles} title={item.title} target={item.target} link={item.link} key={item.id} /> )

        return (
            <footer id={styles.colophon}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.logo}>
                        <img src={this.logo.url} alt={this.logo.alt} />
                    </div>
                    <div className={styles.policies}>
                        {policies}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
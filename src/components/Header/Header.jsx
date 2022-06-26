import React from 'react';
import NavLink from '../Header/Navlink/Navlink';
import styles from './Header.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state;
        this.logo = this.state.logo
    }

    render() {

        let navLink = this.state.navLink
            .map( (item, i) => <NavLink title={item.title} link={item.link} target={item.target} key={i} /> );

        return (
            <header id={styles.masthead}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.header__logo}>
                        <img src={this.logo.url} alt={this.logo.alt} />
                    </div>
                    <div className={styles.navigation}>
                        {navLink}
                    </div>
                    <div className={styles.button}>
                        <p>{this.state.button}</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
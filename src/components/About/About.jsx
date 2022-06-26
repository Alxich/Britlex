import React from 'react';
import AboutItem from './AboutItem/AboutItem';
import styles from './About.module.css';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
    }

    render() {

        const aboutItem = this.state.aboutItem
            .map( (items) => <AboutItem 
                componentClass = {styles.item}
                number={
                    {
                        class: styles.number,
                        text: items.number
                    }
                }
                title={
                    {
                        class: styles.number_title,
                        text: items.title
                    }
                }
                key={items.id}
            /> );

        return(
            <div id='about' className={styles.about}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.lt_side}>
                        <div className={styles.title}>
                            <h3>{this.state.title}</h3>
                        </div>
                        <div className={styles.text_block}>
                            <p>{this.state.text}</p>
                        </div>
                        <div className={styles.counter}>
                            {aboutItem}
                        </div>
                    </div>
                    <div className={styles.rt_side} data-aos="fade-up-left">
                        <img src={this.state.image.src} alt={this.state.image.alt} />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
import React from "react";
import styles from './Banner.module.css'

class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
    }

    render() {
        return (
            <div id='home' className={styles.banner}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.lt_side}>
                        <div className={styles.title}>
                            <h1>{this.state.title}</h1>
                        </div>
                        <div className={styles.text_block}>
                            <p>{this.state.text}</p>
                        </div>
                        <div className={styles.button}>
                            <p>{this.state.button}</p>
                        </div> 
                        <div className={styles.lamp}>
                            <img src={this.state.lightImage.url} alt={this.state.lightImage.alt} />
                        </div>
                    </div>
                    <div className={styles.rt_side} data-aos="zoom-out-down">
                        <img src={this.state.image.url} alt={this.state.image.alt} />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Banner;
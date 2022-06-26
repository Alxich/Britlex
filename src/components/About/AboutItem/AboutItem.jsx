import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

class AboutItem extends React.Component {
    constructor(props) {
        super(props);

        this.componentClass = this.props.componentClass;
        this.number = this.props.number;
        this.title = this.props.title;
    }

    render() {
        return (
            <div className={this.componentClass}>
                <div className={this.number.class} >
                    <CountUp end={this.number.text} redraw={false}>
                        {
                            ({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )
                        }
                    </CountUp>
                </div>
                <div className={this.title.class}>
                    {this.title.text}
                </div>
            </div>
        )
    }
}

export default AboutItem;
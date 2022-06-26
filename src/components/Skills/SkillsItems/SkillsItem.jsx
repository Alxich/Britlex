import React from "react";

class SkillsItem extends React.Component {
    constructor(props) {
        super(props);

        this.componentClass = this.props.componentClass;
        this.containerClass = this.props.containerClass;
        this.index = this.props.index;
        this.image = this.props.image;
        this.title = this.props.title;
        this.text = this.props.text;
        this.button = this.props.button;
    }

    render() {
        return(
            <div className={this.componentClass}>
                <div className={this.image.class} data-aos="zoom-in-down">
                    <img src={this.image.image.src} alt={this.image.image.alt} />
                </div>
                <div className={this.containerClass}>
                    <div className={this.title.class}>
                        <h4>{this.title.text}</h4>
                    </div>
                    <div className={this.text.class}>
                        <p>{this.text.text}</p>
                    </div>
                    <div className={this.button.class}>
                        <p>{this.button.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillsItem;
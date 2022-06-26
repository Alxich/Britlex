import React from 'react';

class PricingItem extends React.Component {
    constructor(props) {
        super(props);

        this.componentClass = this.props.componentClass;
        this.image = this.props.image;
        this.title = this.props.title;
        this.text = this.props.text;
        this.priceCn = this.props.priceCn;
        this.price = this.props.price;
        this.whileTime = this.props.whileTime;
    }

    render() {
        return(
            <div className={this.componentClass} >
                <div className={this.image.class} data-aos="fade-up">
                    <img src={this.image.image.src} alt={this.image.image.alt} />
                </div>
                <div className={this.title.class}>
                    <h4>{this.title.text}</h4>
                </div>
                <div className={this.text.class}>
                    <p>{this.text.text}</p>
                </div>
                <div className={this.priceCn}>
                    <p className={this.price.class}>
                        {this.price.text}
                    </p>
                    <p className={this.whileTime.class}>
                        {this.whileTime.text}
                    </p>
                </div>
            </div>
        )
    }
}

export default PricingItem;
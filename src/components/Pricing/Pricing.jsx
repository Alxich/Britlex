import React from 'react';
import styles from './Pricing.module.css';
import PricingItem from './PricingItem/PricingItem';

class Pricing extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.state;
    }

    render() {

        const pricingItem = this.state.pricingItems
            .map( (items) => <PricingItem 
                    componentClass={styles.item}
                    image={
                        {
                            image: items.image,
                            class: styles.thumbnail
                        }
                    }
                    title={
                        {
                            text: items.title,
                            class: styles.title
                        }
                    } 
                    text={
                        {
                            text: items.text,
                            class: styles.text_block
                        }
                    } 
                    priceCn={styles.price_cn}
                    price={
                        {
                            text: items.price,
                            class: styles.price
                        } 
                    }
                    whileTime={
                        {
                            text: items.whileTime,
                            class: styles.while_time
                        } 
                    }
                    key={items.id}
                /> )

        return(
            <div id='pricing' className={styles.pricing}>
                <div className='main-title'>
                    <h3>{this.state.title}</h3>
                </div>
                <div className={`container ${styles.container}`}>
                    {pricingItem}
                </div>
            </div>
        )
    }
}

export default Pricing;
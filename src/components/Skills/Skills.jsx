import React from "react";
import SkillsItem from "./SkillsItems/SkillsItem";
import styles from "./Skills.module.css";

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
    }

    render() {
    
        const gridClasses = [styles.item_1, styles.item_2, styles.item_3, styles.item_4,]

        const gridItems = this.state.gridItems
        .map( (items, i) => <SkillsItem 
                componentClass = {`${gridClasses[i]} ${styles.grid_item}`}
                containerClass = {styles.grid_container}
                index={i + 1}
                image={
                    {
                        class: styles.image,
                        image: items.image,
                    }
                }
                title={
                    {
                        class: styles.grid_title,
                        text: items.title
                    }
                }
                text={
                    {
                        class: styles.grid_text,
                        text: items.text
                    }
                }
                button={
                    {
                        class: styles.button,
                        text: items.button
                    }
                }
                key={items.id}
            />)

        return(
            <div id='skills' className={styles.skills}>
                <div className="main-title">
                    <h3>{this.state.title}</h3>
                </div>
                <div className={`container ${styles.container}`}>
                    {gridItems}          
                </div>
            </div>
        )
    }
}

export default Skills;
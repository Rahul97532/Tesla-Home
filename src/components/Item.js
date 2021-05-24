import React from 'react'
import Button from './Button'
import './Item.css';

const Item = (props) => {
    return (
        <div className='items' style={{
            backgroundImage: `url(${props.backgroundImg})`
        }}>
            <div className="item-container">
                <div className="item-text">
                    <p>{props.title}</p>
                    <div className="item-textDesc">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="item-lowerThird">
                    <div className="item-buttons">
                        <Button imp='primary' text={props.leftButtonText} link={props.leftButtonLink} />

                        {
                            props.twoButton && (
                                <Button imp='secondary' text={props.rightButtonText} link={props.rightButtonLink} />
                            )
                        }
                    </div>
                    {
                        props.first && (
                            <div className="item-expand">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Item

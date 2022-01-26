import React from 'react';

const CustomNumberInput = (props) => {
    const {
        title,
        amount, 
        changeAmount
    } = props

    return (
        <div className="number-input-container">
            <h3 className="input-title">{title}</h3>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => changeAmount(e.target.value)}
                min={1}
                max={50}
            />
        </div>
    )
};

export default CustomNumberInput;

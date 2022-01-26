import React, { useState } from 'react';

const CustomSelect = (props) => {
    
    const [showOptions, setShowOptions] = useState(false)

    const {
        selectLabel,
        selectedOptionId,
        options,
        changeOptionId
    } = props
    
    const selectedOption = options.find(option => option.id === selectedOptionId)

    function handleOptionClick(id) {
        changeOptionId(id)
        setShowOptions(false)
    }

    return (
        <div className={`select-dropdown-container ${showOptions ? 'visible' : ''}`}>
            <h3 className="select-label">{selectLabel}</h3>
            <div 
                className="selected-option"
                onClick={() => {setShowOptions((prevShowOptions) => !prevShowOptions)}}
                tabIndex="0"
            >
                {selectedOption ? selectedOption.name : null}
            </div>
            <div 
                className="options-container"
                onBlur={() => setShowOptions(false)}
                tabIndex="0"
            >
                {options.map((option) => {
                    return (
                        <div 
                            key={option.id} 
                            className="select-option"
                            onClick={() => handleOptionClick(option.id)}
                        >{option.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default CustomSelect;

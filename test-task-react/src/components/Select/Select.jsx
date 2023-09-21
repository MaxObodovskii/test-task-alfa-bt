import React, {useState} from 'react';

import data from '../../data.json';

import './Select.css';

const Select = () => {
    const [filteredData, setFilteredData] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const input = event.target.value;
        const filtered = data.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));

        setFilteredData(filtered);
        setInputValue(input);
    };

    const handleToggleListByBtn = () => {
        setIsOpen(isOpen => !isOpen);
    };

    const handleClickByInput = () => {
        setIsOpen(true);
    };

    const handleSelectItem = (item) => {
        setIsOpen(false);
        setInputValue(item.name);
    };

    return (
        <div className="select-container">
            <input
                className="input-names"
                type="text"
                placeholder='The names'
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleClickByInput}
            />

            {
                isOpen && (
                    <ul className="list">
                        {
                            filteredData.length > 0
                                ?
                                (filteredData.map((item) => (
                                    <li className="list-item"
                                        key={item.name}
                                        onClick={() => handleSelectItem(item)}
                                    >
                                        {item.name}
                                    </li>
                                )))
                                :
                                (
                                    <li className="list-item no-options">
                                        No options
                                    </li>
                                )
                        }
                    </ul>
                )
            }

            <input
                className={`${isOpen ? 'open' : ''}`}
                type="button"
                value={`${isOpen ? '▲' : '▼'}`}
                onClick={handleToggleListByBtn}
            />
        </div>
    );
};

export default Select;

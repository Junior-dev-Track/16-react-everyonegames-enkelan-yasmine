import React, { useState } from 'react';


function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
        // Add logic to perform search or update elsewhere as needed
    };

    return (
        <div className="search-bar-container">
            <img src={.} alt={} />
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Cerca giochi, console..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <i className="fas fa-search search-icon"/> {/* Assuming using FontAwesome */}
                </button>
            </form>
        </div>
    );
}

export { Header };

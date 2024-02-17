import React from 'react';
 
function Header({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Shopping Cart</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for SRM Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default Header;
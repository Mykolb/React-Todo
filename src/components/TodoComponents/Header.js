import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>My TodoList</h1>
        </header>
    )
}


const headerStyle = {
    background: 'white',
    color: 'pink',
    textAlign: 'center',
    padding: '10px'
}

export default Header;

import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {

    //looks up component tree to find provider
    // will have access to data provided in value property 




    render() {
        //can wrap multiple consumer contexts


        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {

                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;

                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax, }}>
                            <h1> Context App</h1>
                            <div onClick={toggleAuth} style={{ cursor: 'pointer' }}>
                                {isAuthenticated ? 'Logged in' : 'logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}

export default Navbar;

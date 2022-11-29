import React, { createContext, Component } from "react";

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {

    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }


    render() {
        //value property takes any data we want to provide
        //...this.state = takes all of the properties inside state and spreads them in object
        //children refers to booklist and navbar components - the ones being wrapped
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
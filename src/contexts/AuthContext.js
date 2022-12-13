import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {

    state = {
        isAuthenticated: false,
    }

    toggleAuth = () => {
        //turn it to the reverse of whatever it is right now
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
    }

    render() {

        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    };
}

export default AuthContextProvider;
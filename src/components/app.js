import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LogOutAction } from '../store/action/logOut';
import { Actions } from 'react-native-router-flux';



import {
    StyleSheet,
    Text,
    View
} from 'react-native';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.LoginReducer.isAuthenticated,
    }
}

class App extends Component {


    handleLogOut() {
        this.props.dispatch(LogOutAction.logout());
       // Actions.LogIn({ type: 'reset' })
        console.log("actionss")
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to App page
        </Text>
                <Text style={styles.logout} onPress={this.handleLogOut.bind(this)}>
                    Logout
        </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    logout: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        borderWidth: 6,
        borderColor: "black"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(mapStateToProps)(App);
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';
import LoginCart from './LoginCart';
import RadioButton from './widgets/RadioButton';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: true
        };
    }
    changeSelectRememberMe = () => {
        this.setState({
            selected: !this.state.selected,
        });
    };
    render() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <View style={styles.Column}>
                    <View style={styles.logo}>
                        <Image source={require("../../assets/logo.png")} resizeMode='stretch' />
                        <Text>Lazyy</Text>
                    </View>
                    <LoginCart />
                    <View style={styles.buttonLogin}>
                        <RadioButton selected={this.state.selected} size={20} content={" Remember me"} callback={this.changeSelectRememberMe.bind(this)} />
                        <View style={styles.buttonLoginDetail}>
                            <Button type="solid" title="Login" onPress = {
                                ()=>{this.props.onLogin(1)}
                            }></Button>
                        </View>
                    </View>
                    <View style={styles.buttonRegister}>
                        <Text >Bạn chưa đăng kí? </Text>
                        <Text style={{ color: 'blue' }}>Đăng kí</Text>
                    </View>
                </View>
                <View style={styles.background}>
                    <Image source={require("../../assets/image_01.png")} resizeMode='stretch' style={styles.imageBackground} />
                </View>
            </View >
        );
    }
}

export default Login

const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
    }
}
const styles = StyleSheet.create({
    background: {
        zIndex: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    imageBackground: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: 220,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    boxShadow: {
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ed7171',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
    },
    Column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        paddingLeft: 28,
        paddingRight: 28,
    },
    Row: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 700
    },
    logo: {
        width: '100%',
        height: 110,
        paddingTop: 60,
        paddingBottom: 110,
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //backgroundColor: 'grey'
    },
    buttonLogin: {
        width: '100%',
        height: 70,
        paddingTop: 20,
        alignContent: 'center',
        //flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        //backgroundColor: 'black'
    },
    buttonRegister: {
        width: '100%',
        height: 100,
        paddingTop: 10,
        //backgroundColor: 'pink',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonLoginDetail: {
        width: 150,
        height: 100,
    }
});
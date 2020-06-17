import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,TouchableOpacity,Dimensions,Image,SafeAreaView,ScrollView} from 'react-native'
import * as firebase from "firebase";
import {setEmail} from '../store/actions'
import { connect } from 'react-redux';

export class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    if(email != ' ', password != ' '){
        this.props.setEmail(email)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {this.props.navigation.navigate('Main')})
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    const window = Dimensions.get("window");
    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={{resizeMode: 'stretch',width:'100%',height:160}}
                    source={require('./images/logo2.jpeg')}            
                />
                <View style={styles.container}>
                    <Text style={{fontSize:25,fontFamily:'times'}}>Sign In</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    />
                    <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    />
                    {/* <Button title="Login" onPress={this.handleLogin} /> */}

                    <View style={{flexDirection:'row' ,marginVertical:10}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={{fontWeight:'bold'}}> Sign Up</Text>
                    </TouchableOpacity>   
                    </View>
                    <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={this.handleLogin}
                    >
                    <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
  }
}
const mapDispatchToProps = dispatch => {
    return {
      setEmail:(value)=>dispatch(setEmail(value))
    }
  }
export default connect(null,mapDispatchToProps)(Login)  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#00b359',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:'60%'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
})
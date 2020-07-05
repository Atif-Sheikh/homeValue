import React from 'react'
import { StyleSheet, Text, TextInput, View, Button ,Image,TouchableOpacity,Dimensions,SafeAreaView,ScrollView} from 'react-native'
import * as firebase from "firebase";
// import { TouchableOpacity } from 'react-native-gesture-handler';

import {setEmail} from '../store/actions'
import { connect } from 'react-redux';

export class SignUp extends React.Component {
  state = { 
    email: '', 
    password: '', 
    errorMessage: null, 
    fName:'',
    lName:''
}

  handleSignUp = () => {
    const { email, password, fName, lName,} = this.state
   
    if(email != ' ', password != ' ', fName != ' ', lName != ' '){
        this.props.setEmail(email)
        const nod = email.replace(".","dot").replace("@","at")
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          const userUid = firebase.auth().currentUser.uid;
          let obj = {
            fName:this.state.fName,
            lName:this.state.lName,
            amount:'',
            paid:false,
            
          }
          // firebase.database().ref('users').child(email).set(obj)
          firebase.database().ref('users').child(nod).set(obj)
          this.props.navigation.navigate('Main')
  
        })
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
                        
                    <Text style={{fontSize:25,fontFamily:'times'}}>Sign Up</Text>
                    {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                    <TextInput
                    placeholder="First Name"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={fName => this.setState({ fName })}
                    value={this.state.fName}
                    />
                    <TextInput
                    placeholder="Last Name"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={lName => this.setState({ lName })}
                    value={this.state.lName}
                    />  
                    <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    />
                    <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    />
                    <View style={{flexDirection:'row',marginVertical:10}}>
                    <Text>Already a Member?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{fontWeight:'bold'}}> Log In</Text>
                    </TouchableOpacity>   
                    </View>
                    {/* <Button style={styles.Button} title="Sign Up" onPress={this.handleSignUp} /> */}
                    <TouchableOpacity
                    style={styles.signUpScreenButton}
                    onPress={this.handleSignUp}
                    underlayColor='#fff'>
                        <Text style={styles.signUpText}>Sign Up</Text>
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
  export default connect(null,mapDispatchToProps)(SignUp)  

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
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 8
  },
  signUpScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#00b359',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '60%',
  },
  signUpText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  Image:{
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50
  }
})
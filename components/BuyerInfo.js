import React, { Component } from 'react'
import { View, Text ,Image ,Picker,TextInput ,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity,Button} from 'react-native'
import { connect } from 'react-redux'
import contries from './contries'

import * as firebase from "firebase";

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


export class BuyerInfo extends Component {
state={
    selected:'',
    country:'United States',
    fulName:'',
    email:'',
    nameOnCard:'',
    phoneNo:'',
    next:false,
    error:null,
    cardData: { valid: false },
    submitted:false,
}

componentDidMount = () =>{
    this.setState({email:this.props.email})

    const userUid = this.props.userAuth;
    firebase.database().ref('users').child(userUid).on("value",(data)=>{
        let status = data.val();   
        
        if(status){
          this.props.navigation.navigate('Main')
        }
      
    })
}
_onChange = cardData => {
    this.setState({ cardData })
};
getCreditCardToken = (creditCardData) => {
    const card = {
      'card[number]': creditCardData.values.number.replace(/ /g, ''),
      'card[exp_month]': creditCardData.values.expiry.split('/')[0],
      'card[exp_year]': creditCardData.values.expiry.split('/')[1],
      'card[cvc]': creditCardData.values.cvc
    };
    return fetch('https://api.stripe.com/v1/tokens', {
      headers: {
        // Use the correct MIME type for your server
        Accept: 'application/json',
        // Use the correct Content Type to send data to Stripe
        'Content-Type': 'application/x-www-form-urlencoded',
        // Use the Stripe publishable key as Bearer  stripePublishableKey: 'pk_live_sOZHz87V0o8d6wNCJ8eqqYdm'
        Authorization: `Bearer ${'pk_live_sOZHz87V0o8d6wNCJ8eqqYdm'}`
      },
      // Use a proper HTTP method
      method: 'post',
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map(key => key + '=' + card[key])
        .join('&')
    }).then(response => response.json());
  };


_next =  async (creditCardInput)=>{
    let {nameOnCard , email , phone } = this.state;
    if(nameOnCard != '' && email != '' && phone != ''){

    this.setState({ submitted: true });
    console.log(creditCardInput,'creditCardInput')
    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await this.getCreditCardToken(creditCardInput);
      console.log(creditCardToken.id,'creditCardToken')
      if (creditCardToken.error) {
        // Reset the state if Stripe responds with an error
        // Set submitted to false to let the user subscribe again
        this.setState({ submitted: false, });
        return;
      }
      if(creditCardToken.id){
        fetch('https://pure-waters-58582.herokuapp.com/create-payment-intent', {
            method: 'post',
        body: {
            stripeToken:creditCardToken.id,
            stripeEmail:this.state.email,
            name:this.state.nameOnCard,
            phone:this.state.phoneNo
        }
        }).then(response => {
            console.log(response.status)
            if(response.status == 200){
                const userUid = this.props.userAuth;
                firebase.database().ref('users').child(userUid).update({ paid: true })
                .then(()=>{
                    this.props.navigation.navigate('Main')
                })

            }
        });
      }
    } catch (e) {
      this.setState({ submitted: false,error: e });
      console.log(e,'eror===============')
      return;
    }        
    }else{
        this.setState({error:'please fill the complete form'})
    }
}
 

  submmit_card = () =>{

  }
    render() {
        console.log(this.props.userAuth,'<= userAuth')
        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
                    <Image
                        style={{resizeMode: 'stretch',width:'100%',height:160}}
                        source={require('./images/logo2.jpeg')}            
                    />
                    <View>
                        <Text style={{fontSize:18,margin:10}}>BUYER INFO </Text>
                        <View style={{borderColor:'gray',borderWidth:0.5,marginHorizontal:10}}/>
                        <Text style={{fontSize:15,margin:15}}>Country</Text>
                        <View style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}>
                            <Picker
                            mode="dropdown"
                            selectedValue={this.state.country}
                            onValueChange={(itemValue, itemIndex) => {this.setState({country:itemValue})}}
                            >   
                            {contries.map((value,index)=>{return<Picker.Item label={value} value={value} key={index}/>
                            })}
                            </Picker>
                        </View>
                        <Text style={{fontSize:15,margin:15}}>Full Name</Text>
                        <TextInput
                            style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                            placeholder="Full Name ( OPTIONAL )"
                            value={this.state.fulName}
                            onChangeText={text=>this.setState({fulName:text})}
                        />
                        <Text style={{fontSize:15,margin:15}}>Email</Text>
                        <TextInput
                            style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                            placeholder="Email"
                            value={this.state.email}
                            onChangeText={text=>this.setState({email:text})}
                        />
                        <Text style={{fontSize:18,margin:10}}>ORDER OVERVIEW </Text>
                            <View style={{borderColor:'gray',borderWidth:0.5,marginHorizontal:10}}/>
                        <View style={{margin:10}}>
                            <View style={styles.nContainer}>
                                <Text style={{fontSize:16}}>BASIC AVM </Text>
                                <Text style={{fontSize:16}}>$7.99</Text>
                            </View>
                            <View style={{borderColor:'#ccc',borderWidth:0.5,marginHorizontal:10}}/>
                            <View style={styles.nContainer}>
                                <Text>Subtotal</Text>
                                <Text>$7.99</Text>
                            </View>
                            <View style={styles.nContainer}>
                                <Text style={{color:'green'}}>Total </Text>
                                <Text style={{color:'green',fontSize:20}}>Charges $7.99</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:18,margin:10}}>PAYMENT INFO </Text>
                            <View style={{borderColor:'gray',borderWidth:0.5,marginHorizontal:10}}/>
                            <Text style={{margin:10,}}>NAME ON THE CARD</Text>
                            <TextInput
                                style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                                placeholder="Full name"
                                value={this.state.nameOnCard}
                                onChangeText={text=>this.setState({nameOnCard:text})}
                            />
                            <Text style={{margin:10,}}>HOLDER PHONE</Text>
                            <TextInput
                                style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                                placeholder="+55 (999) 99999 9999"
                                keyboardType="numeric"
                                value={this.state.phoneNo}
                                onChangeText={text=>this.setState({phoneNo:text})}
                            />
                            <Text style={{margin:10,}}>CREDIT CARD NUMBER</Text>
                        
                            <View style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10,height:50,justifyContent:'center'}}>
                                <LiteCreditCardInput onChange={this._onChange} />
                            </View>
                            {this.state.error != null && (
                                <Text style={{color:'red',textAlign:'center'}}>{this.state.error}</Text>
                            )}
                            <View
                            style={{ 
                                marginHorizontal:15,
                                borderRadius:20,
                                padding:10
                            }}>
                                <Button
                                style={{ 
                                    backgroundColor: "#00b359",
                                    }}
                                    title='Pay Now'
                                    disabled={!this.state.cardData.valid || this.state.submitted}
                                    onPress={() => this._next(this.state.cardData)}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        ) 
    }
}
const styles = StyleSheet.create({
    nContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
    }
})
const mapStateToProps = (state) => {
    return{
        userAuth:state.authReducer.userAuth,
        email:state.setEmailReducer.email
    }
  }
export default connect(mapStateToProps, null)(BuyerInfo)

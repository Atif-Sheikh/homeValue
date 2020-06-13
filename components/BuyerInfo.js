import React, { Component } from 'react'
import { View, Text ,Image ,Picker,TextInput ,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import contries from './contries'

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
    error:null
}
_onChange = form => {
    if(true){
        
    }
    console.log(form)
};
_next = ()=>{
    const { fulName , email } = this.state;
    if(fulName == '' || email == ''){
        this.setState({error:'please fill complete form'})
    }
    else {
        this.setState({error:null})
        this.props.navigation.navigate('Main')
    }
}
    render() {
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
                            placeholder="Full Name"
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
                                <Text style={{fontSize:16}}>$20</Text>
                            </View>
                            <View style={{borderColor:'#ccc',borderWidth:0.5,marginHorizontal:10}}/>
                            <View style={styles.nContainer}>
                                <Text>Subtotal</Text>
                                <Text>$20</Text>
                            </View>
                            <View style={styles.nContainer}>
                                <Text style={{color:'green'}}>Total </Text>
                                <Text style={{color:'green',fontSize:20}}>Charges $20.00</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:18,margin:10}}>PAYMENT INFO </Text>
                            <View style={{borderColor:'gray',borderWidth:0.5,marginHorizontal:10}}/>
                            <Text style={{margin:10,}}>NAME ON THE CARD</Text>
                            <TextInput
                                style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                                placeholder="Full name"
                            />
                            <Text style={{margin:10,}}>HOLDER PHONE</Text>
                            <TextInput
                                style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                                placeholder="+55 (999) 99999 9999"
                                keyboardType="numeric"
                            />
                            <Text style={{margin:10,}}>CREDIT CARD NUMBER</Text>
                        
                            <View style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10,height:50,justifyContent:'center'}}>
                                <LiteCreditCardInput onChange={this._onChange} />
                            </View>
                            {/* <TextInput
                                style={{borderColor:'gray', borderWidth:1,marginHorizontal:15,borderRadius:10}}
                                placeholder="CREDIT CARD NUMBER"
                            /> */}
                            {this.state.error != null && (
                                <Text style={{color:'red',textAlign:'center'}}>{this.state.error}</Text>
                            )}
                            <TouchableOpacity onPress={this._next}
                                style={{ 
                                    backgroundColor:this.state.error ?'#00b359' : "#00b359",
                                    marginHorizontal:15,
                                    borderRadius:10,
                                    margin:10
                                    ,padding:10
                                    }}>
                                <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Next</Text>
                            </TouchableOpacity>
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

export default connect(null, null)(BuyerInfo)

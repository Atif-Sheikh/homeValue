import React, { Component } from 'react'
import { Text, StyleSheet, View ,TextInput, TouchableOpacity, Image ,ActivityIndicator} from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons5 from './Icons5'
import {setEstimatedValue} from '../store/actions'
import * as firebase from "firebase";

export class MainInput extends Component {
    state={
        value:'',
        houseNo:'',
        zip:'',
        liveState:'',
        city:'',
        focus:'',
        error:'',
        loading:false

    }
    replace = (e) =>{
        return e.replace(" ", "+")
    }
    search = () => {
        this.setState({loading:true})
        fetch(`https://slipstream.homejunction.com/ws/avm?deliveryLine=${this.replace(this.state.houseNo)}&city=${this.replace(this.state.city)}&state=${this.state.liveState}&zip=${this.state.zip}&radius=1`, { 
            headers: {
                // "Hji-Slipstream-Token": json.result.token
                Authorization: "s9-aec9c76c-feff-4d53-9c55-287fc3777585"
            }
            }).then((res)=>{
                return res.json()
            }).then((json)=>{
                console.log(json.result.address)
                this.props.setEstimatedValue(json.result)
                // const nod = this.props.email.replace(".","dot").replace("@","at");
                // const data = this.props.estimatedValue.valuations.general.EMV;
                // firebase.database().ref('users').child(nod).update({ amount: data*100,paid:false })
                this.setState({loading:false})
            }).catch((err)=>{
                console.log('errrror',err)
                this.setState({error:err})
                this.setState({loading:false})
            })
            //======================= for map ====================
        // fetch(`https://slipstream.homejunction.com/ws/addresses/geocode?deliveryLine=${this.replace(this.state.houseNo)}&city=${this.replace(this.state.city)}&state=${this.state.liveState}&zip=${this.state.zip}&radius=1`, { 
        //     headers: {
        //         // "Hji-Slipstream-Token": json.result.token
        //         Authorization: "s9-a61f1c24-a8b8-48c0-9f2a-5ff07be61f0b"
        //     }
        //     }).then((res)=>{
        //         return res.json()
        //     }).then((json)=>{
        //         console.log(json.result)
        //         // this.props.setEstimatedValue(json.result)
        //     }).catch((err)=>{
        //         console.log('errrror',err)
        //         // this.setState({error:err})
        //     })    
        // fetch('https://slipstream.homejunction.com//ws/api/authenticate?license=2AFD-3DA9-584D-F5AE',{
        //     method: "GET",
        // }).then((res)=>{
        //     return res.json()
        // }).then((json)=>{
        //     console.log(json.result.token)
        //     this.setState({token:json.result.token})
        //     let obj = {
        //         deliveryLine: "3066 laurel ridge", 
        //         state: "FL", 
        //         city: "Riviera Beach",
        //         zip: "33404"
        //     }
        //     let myJSON = JSON.stringify(obj);
            
        // })
        // .catch((err)=>{
        //     this.setState({error:err})
        // })
    }

    render() {
        return (
            <View>
                <Image
                    style={{resizeMode: 'stretch',width:'100%',height:160}}
                    source={require('./images/logo2.jpeg')}            
                />
                <View style={{flexDirection:'row',marginBottom:20,justifyContent:'center'}}>
                    <Text style={styles.heading}> AVM </Text>
                    <Text style={{width:250,fontSize:20,textAlign:'center'}}>
                        automated valuation model (AVM) for a property
                    </Text>
                </View>
                {this.state.error ? <Text style={{color:'red',textAlign:'center'}}>error</Text> : <></>}
                <View>
                    <TextInput
                    style={[
                        styles.textField,{ 
                            height: 45, 
                            borderColor: this.state.focus =='house'? 'skyblue' :'gray',
                            borderWidth: this.state.focus =='house'? 2 : 1 ,
                            backgroundColor:'#ffe6b3' 
                        }]}
                    onChangeText={(e)=>{this.setState({houseNo:e})}}
                    value={this.state.houseNo}
                    placeholder='  house number and street'
                    onFocus={()=>this.setState({focus:'house'})}
                    onBlur={()=>this.setState({focus:''})}
                    />
                    <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput
                        style={[
                            styles.textField,{ 
                                height: 45, 
                                borderColor: this.state.focus =='zip'? 'skyblue' :'gray',
                                borderWidth: this.state.focus =='zip'? 2 : 1 ,
                                width:110,
                            }]}
                        onChangeText={(e)=>{this.setState({zip:e})}}
                        value={this.state.zip}
                        placeholder='  Zip'
                        onFocus={()=>this.setState({focus:'zip'})}
                        onBlur={()=>this.setState({focus:''})}
                        keyboardType='numeric'
                        />

                        <Icon name="exchange" size={30} style={{justifyContent:'center',alignSelf:'center'}}/>

                        <TextInput
                        style={[
                            styles.textField,{ 
                                height: 45, 
                                borderColor: this.state.focus =='liveState'? 'skyblue' :'gray', 
                                borderWidth: this.state.focus =='liveState'? 2 : 1 ,
                                width:110,
                            }]}
                        onChangeText={(e)=>{this.setState({liveState:e})}}
                        value={this.state.liveState}
                        placeholder='  State'
                        onFocus={()=>this.setState({focus:'liveState'})}
                        onBlur={()=>this.setState({focus:''})}
                        />
                    </View>

                    <TextInput
                    style={[
                        styles.textField,{ 
                            height: 45, 
                            borderColor: this.state.focus =='city'? 'skyblue' :'gray', 
                            borderWidth: this.state.focus =='city'? 2 :1, 
                        }]}
                    onChangeText={(e)=>{this.setState({city:e})}}
                    value={this.state.city}
                    placeholder='  city'
                    onFocus={()=>this.setState({focus:'city'})}
                    onBlur={()=>this.setState({focus:''})}
                    />

                    <TouchableOpacity onPress={this.search} 
                    style={{
                        flexDirection:'row',
                        alignSelf:'center'
                        }}
                    >
                        <Text 
                        style={{
                            fontSize:18,
                            alignSelf:'center',
                            backgroundColor:'#00b359',
                            borderRadius:10,
                            paddingHorizontal:50,
                            paddingVertical:10,
                            color:'#fff'
                        }}>
                            <Icons5 name="search-dollar" size={20} color="#fff"/>  Search 
                        </Text>
                    </TouchableOpacity>
                </View>
                <ActivityIndicator
                    animating = {this.state.loading}   
                />
            </View>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setEstimatedValue:(obj)=>dispatch(setEstimatedValue(obj))
    }
}
const mapStateToProps = (state) => {
  return{
        estimatedValue:state.estimatedValueReducer.estimatedValue,
        email:state.setEmailReducer.email
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainInput)

const styles = StyleSheet.create({
    heading:{
        fontSize:24
    },
    textField:{
        
        borderRadius:10,
        margin:10,
        fontSize:20
    }
})

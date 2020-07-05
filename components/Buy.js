import React, { Component } from 'react'
import { Text, View } from 'react-native'

import * as firebase from "firebase";

import { connect } from 'react-redux';

export class Buy extends Component {

    componentDidMount=()=>{
        const nod = this.props.email.replace(".","dot").replace("@","at")
        firebase.database().ref('users').child(nod).on("value",(data)=>{
            const status = data.val();
            console.log('[:->)]',status.paid)
            if(status.paid == true){
                this.props.navigation.navigate('Main')
            }
        })
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:20}}> make payment </Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        email:state.setEmailReducer.email
    }
  }
  
export default connect(mapStateToProps,null)(Buy)

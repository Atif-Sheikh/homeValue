import React, { Component } from 'react'
import { Text, View,Linking  } from 'react-native'
import { WebView } from 'react-native-webview';

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
        const uri ='https://polar-wildwood-95264.herokuapp.com/'
        return <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    }
}
const mapStateToProps = (state) => {
    return{
        email:state.setEmailReducer.email
    }
  }
  
export default connect(mapStateToProps,null)(Buy)
{/* <WebView source={{ uri: 'https://polar-wildwood-95264.herokuapp.com/' }} />; */}
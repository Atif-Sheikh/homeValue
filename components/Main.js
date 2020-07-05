import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';

import EstimatedValue from './EstimatedValue'
import MainInput from './MainInput'
import Valuation from './Valuation'
import Address from './Address'
import Atributes from './Atributes'
import Information from './Information'
import Distributions from './Distributions'
import Graphs from './Graphs'
import SalesStatus from './SalesStatus'


const Main = (props) => {
  console.log(props.estimatedValue)
  console.log(props.email)
  const [success,setSeuccess ] = useState('');
  const [loading , setLoding] = useState(false);

  buyProperty = () => {
    props.navigation.navigate('Buy')
  }
  sendMail = () =>{
    let data = props.estimatedValue.valuations;
    let data1 = props.estimatedValue.attributes;
    let data2 = props.estimatedValue.address;
    let data3 = props.estimatedValue.heuristics
    let data4 = props.estimatedValue.distributions;

    setLoding(true)

    fetch('https://nameless-mountain-13494.herokuapp.com/api/sentmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dest:props.email,
      EMV:data.general.EMV,
      accuracy:data.general.accuracy,
      low:data.general.low,
      high:data.general.high,
      deliveryLine:data2.deliveryLine,
      city:data2.city,
      state:data2.state,
      zip:data2.zip,
      street:data2.street,
      beds:data1.beds,
      size:data1.size,
      acres:data1.lotSize.acres,
      sqft:data1.lotSize.sqft,
      stories:data1.stories,
      yearBuilt:data1.yearBuilt,
      taxValue:data1.taxValue,
      taxes:data1.taxes,
      propertyType:data1.propertyType,
      apn:data1.apn,
      county:data1.county,
      localDate:new Date(data1.saleDate).toDateString(),
      period:data3.period,
      radius:data3.radius,
      count:data3.count,
      averageA:data4.age.average,
      aboveA:data4.age.above,
      belowA:data4.age.below,
      averageP:data4.price.average,
      aboveP:data4.price.above,
      belowP:data4.price.below,
      averagePPF:data4.pricePerSqFt.average,
      abovePPF:data4.pricePerSqFt.above,
      belowPPF:data4.pricePerSqFt.below,
      averageS:data4.size.average,
      aboveS:data4.size.above,
      belowS:data4.size.below,


    })
  })
  .then((res)=>{
    
    console.log(res)
    setSeuccess('Email sended')
    setLoding(false)
  })
  .catch((err=>{console.log(err)
  
    setLoding(false)
  }))
    console.log('mail send')
  }
  return (
    <SafeAreaView>
    <ScrollView>
      <MainInput/>
      {props.estimatedValue.address ?
      <>
        <EstimatedValue EstimatedPrice={100} low={90} heigh={110}/>
        <Valuation EstimatedPrice={10000}/>
        <Address />
        <Atributes/>
        <Information/>
        <Distributions/>
        <Graphs/>
        {/* <SalesStatus/> */}
        <TouchableOpacity onPress={buyProperty}
            style={{ 
                backgroundColor:'#00b359' ,
                marginHorizontal:15,
                borderRadius:10,
                margin:10
                ,padding:10
                }}>
            <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Buy This Property</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMail}
            style={{ 
                backgroundColor:'#00b359' ,
                marginHorizontal:15,
                borderRadius:10,
                margin:10
                ,padding:10
                }}>
            <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Send Email</Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating = {loading}   
      />
        <Text style={{fontSize:20,textAlign:'center',marginVertical:10}}>{success}</Text>
      </>
      :
      <></>
      }
    </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return{
      estimatedValue:state.estimatedValueReducer.estimatedValue,
      email:state.setEmailReducer.email
  }
}

export default connect(mapStateToProps,null)(Main)
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icons5 from './Icons5'
import { connect } from 'react-redux';

export class Valuation extends Component {
    render() {
        let data = this.props.estimatedValue.valuations;
        console.log(this.props.estimatedValue)
        return (
            <View style={styles.contaner}>
                <View style ={styles.header}>
                    <Icons5 name="hand-holding-usd" size={25} />
                    <Text style={{fontSize:20}}> VALUATIONS </Text>
                </View>

                <View style={{flexDirection:'row',padding:3}}>
                    <Text style={{color:'#fff',backgroundColor:'#505050',borderRadius:50,paddingHorizontal:5}}>comparison  EMV:${data.general.EMV}</Text>
                    <Text style={{color:'#fff',backgroundColor:'#3399ff',borderRadius:50,marginHorizontal:5,paddingHorizontal:5}}>accuracy: {data.general.accuracy}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={{fontWeight:'bold'}}>General</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12}}>EMV:</Text>
                        <Text style={{color:'#0099ff',textDecorationLine: 'underline',fontSize:12}}>${data.general.EMV}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12}}><Icons5 name="arrow-down" size={13} />Low:</Text>
                        <Text style={{color:'red',fontSize:12}}>${data.general.low}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12}}><Icons5 name="arrow-up" size={13} />Heigh:</Text>
                        <Text style={{color:'green',fontSize:12}}>${data.general.high}</Text>
                    </View>       
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                    <Text style={{fontWeight:'bold',marginLeft:5}}>Regression</Text>
                    <Text style={{fontSize:12}}>EMV: $</Text>
                    <Text style={{fontSize:12}}>confidence90Pct: %</Text>
                    <Text style={{fontSize:12}}>confidence65Pct: %</Text>        
                </View>

            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        estimatedValue:state.estimatedValueReducer.estimatedValue
    }
}
export default connect(mapStateToProps,null)(Valuation)

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#E0E0E0',
        flexDirection:'row',
        padding:5,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'#ccc',
        
    },
    contaner:{
        borderWidth:1,
        borderColor:'#ccc',
        marginHorizontal:5,
        marginTop:15,
        borderRadius:5
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#ccc',
        borderTopWidth:1,
        borderBottomWidth:1,
        marginVertical:5,
        padding:5,
        backgroundColor:'#ffe6b3'
    }
})

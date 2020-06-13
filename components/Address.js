import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icons5 from './Icons5'
import { connect } from 'react-redux';

export class Address extends Component {
    render() {
        let data = this.props.estimatedValue.address;
        return (
            <View style={styles.contaner}>
                <View style ={styles.header}>
                    <Icons5 name="map-marker-alt" size={20} />
                    <Text style={{fontSize:20}}> ADDRESS </Text>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.row}>
                        <Text style={{fontWeight:'bold'}}>DeliveryLine</Text>
        <Text>{data.deliveryLine}</Text>
                    </View>
                    <View style={styles.nRow}>
                        <Text style={{fontWeight:'bold'}}>City</Text>
        <Text>{data.city}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>State</Text>
        <Text>{data.state}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>Zip</Text>
        <Text>{data.zip}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>Street</Text>
        <Text>{data.street}</Text>
                    </View>
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
export default connect(mapStateToProps,null)(Address)

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
        paddingVertical:5 ,
        backgroundColor:'#ffe6b3',
        paddingHorizontal:5 
    },
    nRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#ccc',
        borderTopWidth:1,
        paddingVertical:5,
        paddingHorizontal:5
    },
    oddRow:{
        backgroundColor:'#E0E0E0'
    }
})

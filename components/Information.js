import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons5 from './Icons5'
import { connect } from 'react-redux';

export class Information extends Component {
    render() {
        let data = this.props.estimatedValue.attributes;
        let data1 = this.props.estimatedValue.heuristics
        return (
            <View style={styles.contaner}>
                <View style ={styles.header}>
                    <Icons5 name="info-circle" size={20} />
                    <Text style={{fontSize:20}}> Information </Text>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.nRow}>
                        <Text style={{fontWeight:'bold'}}>PropertyType</Text>
        <Text style={{fontWeight:'bold'}} >{data.propertyType}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>APN</Text>
        <Text style={{color:'#3399ff'}}>{data.apn}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>Counrty</Text>
        <Text>{data.county}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>SaleDate</Text>
        <Text style={{backgroundColor:'#808080',borderRadius:5,paddingHorizontal:5,color:'#fff'}}>{new Date(data.saleDate).toDateString()}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>Heuristics period</Text>
        <Text >{data1.period}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>Heuristics radius</Text>
        <Text>{data1.radius}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>Heuristics count</Text>
                        <Text>{data1.count} </Text>
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
export default connect(mapStateToProps,null)(Information)

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#E0E0E0',
        flexDirection:'row',
        padding:5,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'#ccc',
        alignItems:'center'
        
    },
    contaner:{
        borderWidth:1,
        borderColor:'#ccc',
        marginHorizontal:5,
        marginTop:15,
        borderRadius:5
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

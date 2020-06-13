import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons5 from './Icons5'
import { connect } from 'react-redux';

export class Atributes extends Component {

    render() {
        let data = this.props.estimatedValue.attributes;
        console.log('#########',data)
        return (
            <View style={styles.contaner}>
                <View style ={styles.header}>
                    <Icon name="bars" size={20} />
                    <Text style={{fontSize:20}}> Attributes </Text>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.nRow}>
                        <Text style={{fontWeight:'bold'}}>Bed</Text>
        <Text >/ baths: {data.beds}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>size</Text>
        <Text style={{backgroundColor:'#cc0052',borderRadius:5,paddingHorizontal:5,color:'#fff'}}>{data.size}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>LotSize</Text>
        <Text>acres: {data.lotSize.acres} sqft: {data.lotSize.sqft}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>Stories</Text>
        <Text>{data.stories}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>BuildYear</Text>
        <Text style={{backgroundColor:'green',borderRadius:5,paddingHorizontal:5,color:'#fff'}}>{data.yearBuilt}</Text>
                    </View>
                    <View style={[styles.nRow,styles.oddRow]}>
                        <Text style={{fontWeight:'bold'}}>TexValue</Text>
        <Text>{data.taxValue}</Text>
                    </View>
                    <View style={[styles.nRow]}>
                        <Text style={{fontWeight:'bold'}}>Taxes</Text>
        <Text>{data.taxes}</Text>
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
export default connect(mapStateToProps,null)(Atributes)

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

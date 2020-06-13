import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icons5 from './Icons5'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

export class Distributions extends Component {
    render() {
        let data = this.props.estimatedValue.distributions;
        return (
            <View style={styles.contaner}>
                <View style ={styles.header}>
                    <Icons5 name="chart-bar" size={20} />
                    <Text style={{fontSize:20}}>  Distributions </Text>
                    <Text style={{fontSize:11,width:200}}>/ Your home compare to nearby sales</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%',paddingBottom:4,borderWidth:2,borderColor:'#ccc',borderWidth:2,borderStyle:'dashed',borderRadius:1}}>
                        <Text style={{fontWeight:'bold',padding:5}}>Age</Text>

                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icon name="random" size={15}/> average</Text>
        <Text style={{}}>{data.age.average}</Text>
                        </View>
                        <View style={[styles.nRow]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-up" size={15}/> above</Text>
                            <Text style={{}}>{data.age.above}</Text>
                        </View>
                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-down" size={15}/> below</Text>
                            <Text style={{}}>{data.age.below}</Text>
                        </View>
                    </View>
                    <View style={{width:'50%',backgroundColor:'#fff7e6',paddingBottom:4,}}>
                        <Text style={{fontWeight:'bold',padding:5,}}>Price</Text>

                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icon name="random" size={15}/> average</Text>
                            <Text style={{}}>{data.price.average}</Text>
                        </View>
                        <View style={[styles.nRow,]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-up" size={15}/> above</Text>
        <Text style={{}}>{data.price.above}</Text>
                        </View>
                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-down" size={15}/> below</Text>
        <Text style={{}}>{data.price.below}</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%',backgroundColor:'#fff7e6',paddingBottom:4,}}>
                        <Text style={{fontWeight:'bold',padding:6}}>PricePerSqFt</Text>

                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icon name="random" size={15}/> average</Text>
        <Text style={{}}>{data.pricePerSqFt.average}</Text>
                        </View>
                        <View style={[styles.nRow]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-up" size={15}/> above</Text>
                            <Text style={{}}>{data.pricePerSqFt.above}</Text>
                        </View>
                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-down" size={15}/> below</Text>
                            <Text style={{}}>{data.pricePerSqFt.below}</Text>
                        </View>
                    </View>
                    <View style={{width:'50%',paddingBottom:4,borderColor:'#ccc',borderWidth:2,borderStyle:'dashed',borderRadius:1}}>
                        <Text style={{fontWeight:'bold',padding:5}}>Size</Text>

                        <View style={[styles.nRow,]}>
                            <Text style={{}}><Icon name="random" size={15}/> average</Text>
        <Text style={{}}>{data.size.average}</Text>
                        </View>
                        <View style={[styles.nRow,styles.oddRow]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-up" size={15}/> above</Text>
                            <Text style={{}}>{data.size.above}</Text>
                        </View>
                        <View style={[styles.nRow,]}>
                            <Text style={{}}><Icons5 name="long-arrow-alt-down" size={15}/> below</Text>
                            <Text style={{}}>{data.size.below}</Text>
                        </View>
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
export default connect(mapStateToProps,null)(Distributions)
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
        paddingHorizontal:5,
        marginHorizontal:5
    },
    oddRow:{
        backgroundColor:'#E0E0E0'
    }
})

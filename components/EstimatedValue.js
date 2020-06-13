import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons5 from './Icons5'
import { connect } from 'react-redux';

export class EstimatedValue extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.estimatedValue.valuations,'-___________________--_____---------')
        let data = this.props.estimatedValue.valuations;
        return (
            <View >
                <View style={{borderTopWidth:1,borderTopColor:'#707070',marginHorizontal:30,marginTop:15}}/>
                <Text 
                style={{
                    fontSize:20,
                    textAlign:'center',
                    margin:5,
                    color:'#707070'
                }}
                > ESTIMATED VALUE 
                </Text>
                <Text style={styles.heading}> ${data.general.EMV} </Text>
                <Image
                    style={{alignSelf:'center'}}
                    source={require('./linearGradiant.png')}            
                />
                <View 
                style={{
                    justifyContent:'space-between',
                    marginHorizontal:30,
                    flexDirection:'row'
                    }}
                >
                    <Text 
                    style={{
                        fontSize:17,
                        color:'#707070'
                        }}
                        >
                            <Icons5 name="caret-down" size={23} color='#707070'/> ${data.general.low}</Text>
                    <Text 
                    style={{
                        fontSize:15,
                        fontWeight:'bold'
                        }}
                    >
                            <Icons5 name="check" size={14} /> ${data.general.EMV}</Text>
                    <Text 
                    style={{
                        fontSize:17,
                        color:'#707070'
                        }}
                    > ${data.general.high} <Icons5 name="caret-up" size={23} color='#707070'/>
                    </Text>
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
export default connect(mapStateToProps,null)(EstimatedValue)

const styles = StyleSheet.create({
    heading:{
        fontSize:22,
        textAlign:'center',
        margin:5,
        fontWeight:'bold'
    }
})

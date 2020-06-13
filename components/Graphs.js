import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PureChart from 'react-native-pure-chart';
import Icons5 from './Icons5'
import { connect } from 'react-redux';

export class Graphs extends Component {
    percentage =(a,b,c)=>{
        let sum = a+b+c;
        return Math.round((a/sum)*100)
    }
    render() {
        let data = this.props.estimatedValue.distributions;
        let priceData = [
            {
              value: data.price.below,
              label: 'lessExpensive',
              color: '#52CEFF',
            }, {
              value: data.price.above,
              label: 'moreExpensive',
              color: '#90EE90'
            }, 
            {
              value: data.price.average,
              label: 'same',
              color: '#FFA07A'
            }
         
          ]
          let sizeData = [
            {
                value: data.size.below,
                label: 'lessExpensive',
                color: '#52CEFF',
              }, {
                value: data.size.above,
                label: 'moreExpensive',
                color: '#90EE90'
              }, 
              {
                value: data.size.average,
                label: 'same',
                color: '#FFA07A'
              }
         
          ]
          
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Your home compared to nearby sales </Text>
                <View style={{width:'100%'}}>
                    <Text 
                    style={{
                        textAlign:'center',
                        fontWeight:'bold',
                        padding:15,
                        fontSize:16
                        }}
                    >
                       <Icons5 name="hand-holding-usd" size={18} /> PRICE
                    </Text>
                    <View style={{alignSelf:'flex-start',marginLeft:20}}>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#52CEFF"/> Less Expensive
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#90EE90"/> More Expensive
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#FFA07A"/> The same price
                        </Text>
                    </View>
                    <View style={{alignSelf:"center"}}>
                        <PureChart data={priceData} type='pie' />
                    </View>
                    <View style={{alignSelf:'flex-start',marginLeft:20}}>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#52CEFF"/> {this.percentage(data.price.below,data.price.average,data.price.below)} % are less Expensive
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#90EE90"/> {this.percentage(data.price.above,data.price.below,data.price.average)} %  are the more expensive 
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#FFA07A"/> {this.percentage(data.price.average,data.price.below,data.price.above)} %  are the same price
                        </Text>
                    </View>
                </View>
                <View>
                    <Text
                    style={{
                        textAlign:'center',
                        fontWeight:'bold',
                        padding:15,
                        fontSize:16
                        }}
                    ><Icons5 name="sitemap" size={18} /> SIZE</Text>
                   <View style={{alignSelf:'flex-start',marginLeft:20}}>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#52CEFF"/> Less Expensive
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#90EE90"/> More Expensive
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#FFA07A"/> The same price
                        </Text>
                    </View>
                    <View style={{alignSelf:"center"}}>
                        <PureChart data={sizeData} type='pie' />
                    </View>
                    <View style={{alignSelf:'flex-start',marginLeft:20}}>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#52CEFF"/> {this.percentage(data.size.below,data.size.average,data.size.below)} % are less Expensive
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#90EE90"/> {this.percentage(data.size.above,data.size.below,data.size.average)} %  are the more expensive 
                        </Text>
                        
                        <Text>
                            <Icons5 name="square-full" size={15} color="#FFA07A"/> {this.percentage(data.size.average,data.size.below,data.size.above)} %  are the same price
                        </Text>
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
export default connect(mapStateToProps,null)(Graphs)

const styles = StyleSheet.create({
    heading:{
        textAlign:'center',
        fontSize:18,
        padding:10,
        fontWeight:'bold'
    },
    container:{
        // justifyContent:'center',
        // alignItems:'center',
        width:'100%'
    }
})

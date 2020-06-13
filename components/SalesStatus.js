import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PureChart from 'react-native-pure-chart';
import Icons5 from './Icons5'

export default class SalesStatus extends Component {
    render() {
        let sampleData = [
            {
              seriesName: 'High',
              data: [
                {x: '2018-02-01', y: 900},
                {x: '2018-02-02', y: 500},
                {x: '2018-02-03', y: 700},
                {x: '2018-02-04', y: 500},
                {x: '2018-02-05', y: 800},
                {x: '2018-02-01', y: 900},
                {x: '2018-02-02', y: 500},
                {x: '2018-02-03', y: 800},
                {x: '2018-02-04', y: 500},
                {x: '2018-02-05', y: 700},
              ],
              color: 'red'
            },
            {
              seriesName: 'Average',
              data: [
                {x: '2018-02-01', y: 250},
                {x: '2018-02-02', y: 230},
                {x: '2018-02-03', y: 290},
                {x: '2018-02-04', y: 280},
                {x: '2018-02-05', y: 210},
                {x: '2018-02-01', y: 230},
                {x: '2018-02-02', y: 230},
                {x: '2018-02-03', y: 280},
                {x: '2018-02-04', y: 270},
                {x: '2018-02-05', y: 250},
              ],
              color: 'green'
            },
            {
              seriesName: 'low',
              data: [
                {x: '2018-02-01', y: 30},
                {x: '2018-02-02', y: 10},
                {x: '2018-02-03', y: 120},
                {x: '2018-02-04', y: 200},
                {x: '2018-02-05', y: 70},
                {x: '2018-02-01', y: 30},
                {x: '2018-02-02', y: 10},
                {x: '2018-02-03', y: 120},
                {x: '2018-02-04', y: 100},
                {x: '2018-02-05', y: 70},
              ],
              color: 'blue'
            }
          ]
        return (
            <View style={styles.contaner}>
                <View style ={styles.header}>
                    <Icons5 name="chart-line" size={20} />
                    <Text style={{fontSize:15}}>  Stats - Sales last 2 years for Zip: </Text>
                    <Text style={{fontWeight:'bold'}}>91002</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={styles.h0}> </Text>
                    <Text style={styles.row0}>Average</Text>
                    <Text style={styles.row0}>median</Text>
                    <Text style={styles.row0}>Low</Text>
                    <Text style={styles.row0}>Heigh</Text>
                    <Text style={styles.row0}>Q1</Text>
                    <Text style={styles.row0}>Q2</Text>
                    <Text style={styles.row0}>Q3</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={{fontWeight:'bold',fontSize:10,width:43,textAlign:'center',marginLeft:3}}>SalePrice</Text>
                    <Text style={styles.row1}>2990909</Text>
                    <Text style={styles.row1}>23849</Text>
                    <Text style={styles.row1}>4545</Text>
                    <Text style={styles.row1}>56456</Text>
                    <Text style={styles.row1}>56</Text>
                    <Text style={styles.row1}>7657</Text>
                    <Text style={styles.row1}>6753</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#E0E0E0',paddingVertical:2,marginVertical:2}}>
                    <Text style={{fontWeight:'bold',fontSize:10,width:43,marginLeft:3}}>Size</Text>
                    <Text style={styles.row2}>234</Text>
                    <Text style={styles.row2}>43</Text>
                    <Text style={styles.row2}>56</Text>
                    <Text style={styles.row2}>678</Text>
                    <Text style={styles.row2}>78</Text>
                    <Text style={styles.row2}>789</Text>
                    <Text style={styles.row2}>875</Text>
                </View>
                <View style={{margin:10,}}>
                    <PureChart 
                    data={sampleData} 
                    type='line' 
                    numberOfYAxisGuideLine={10} 
                    style={{padding:5}}
                    height={300}
                    />
                </View>
            </View>
        )
    }
}

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
    row1:{
        fontSize:10,
        width:43,
        textAlign:'center',
        marginVertical:2,
        paddingVertical:1
    },
    row0:{
        fontWeight:'bold',
        fontSize:11,
        width:43,
        textAlign:'center',
        backgroundColor:'#E0E0E0',
        marginVertical:5,
        paddingVertical:3
    },
    row2:{
        fontSize:10,
        width:43,
        textAlign:'center',
        marginVertical:2,
        paddingVertical:2,
        backgroundColor:'#E0E0E0',
    },
    h0:{
        fontWeight:'bold',
        fontSize:10,
        width:43,
        marginVertical:5,
        paddingVertical:3,
        backgroundColor:'#E0E0E0',
    }
})

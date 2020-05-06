import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, ScrollView,Dimensions } from 'react-native'
const width=Dimensions.get('window').width
const images=[require('../../assets/images/1.jpg'),
              require('../../assets/images/2.jpg'),
              require('../../assets/images/3.jpeg')]

export class imageSlider extends Component {

    constructor(props){
        super(props)
        this.state={selectedIndex:0}
    }
    setSelectedIndex(event){
        let oneImageWidth=event.nativeEvent.layoutMeasurement.width
        let currentPosition=event.nativeEvent.contentOffset.x
        let selectedIndex=Math.floor(currentPosition/oneImageWidth)
       this.setState({selectedIndex:selectedIndex})
    }
    render() {
        return (<View   style={styles.container}>
             
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} 
            onMomentumScrollEnd={(event)=>{this.setSelectedIndex(event)}} >
              {images.map((image,index)=>{
                  return(<View key={index.toString()}>
                          <Image style={styles.image} source={image}  />
                        </View>)
              })}
            </ScrollView>
            <View style={styles.selectedIndexContainer}>
              <Text style={styles.selectedIndexText}>{this.state.selectedIndex+1+'/'+images.length}</Text>
            </View>   
            </View>
        )
    }
}

export default imageSlider

const styles=StyleSheet.create({
    container:{
        display:'flex'
    },
    image:{
      width:width,
      height:500
    },
    selectedIndexContainer:{
        position:'absolute',
        top:20,
        right:20,
        backgroundColor:'#3b3b3b',
        borderRadius:20
    },
    selectedIndexText:{
        color:'white',
        padding:5,
        marginLeft:10,
        marginRight:10
    } 
})
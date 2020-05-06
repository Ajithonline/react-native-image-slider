/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import  ImageSlider from "./src/container/imageSlider/imageSlider";

const App: () => React$Node = () => {
  return (<View>
           <ImageSlider/>
         </View>);
};

const styles = StyleSheet.create({


});

export default App;

import React from 'react';
import {View, Text}  from 'react-native';

const viewStyles={

};

//tekil export 
//1den çok tekil export olabilir.
export const HelloWorldComponent = ( ) => {
  return (
    <View style={
      {
        backgroundColor:'aqua',
        flex:0.5,
        flexDirection:'row',
        justifyContent:'flex-end', //flex direction ile aynı hizada 
        alignItems:'center' //flex directiona dik hizada
      }
      } >
      <Text> Hello World</Text>
      </View>
  );
}
export const age= 25;
export const func =()=> {

};
//default export
//sadece 1 tane default olabilir 
export default HelloWorldComponent;

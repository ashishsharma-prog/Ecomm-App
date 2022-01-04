import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
const EditButton = (props) => {
    return (
        <View style={styles.header}>
<TouchableOpacity onPress={props.onPress}>
<AntDesign name="edit" size={32} color="black" />
 </TouchableOpacity>
        </View>
       
    )
}

export default EditButton

const styles = StyleSheet.create({

    header:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
       marginHorizontal:10
      
        
    }

})
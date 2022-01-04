import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const HeaderButton = (props) => {
    return (
        <View style={styles.header}>
<TouchableOpacity onPress={props.onPress}>
<Ionicons style={styles.image} name="cart" size={40} color="black" />
 </TouchableOpacity>
        </View>
       
    )
}

export default HeaderButton

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

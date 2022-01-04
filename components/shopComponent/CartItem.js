import React from 'react'
import { StyleSheet, Text, View,
TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
const CartItem = (props) => {
    return (
        <View style={styles.CartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity}:  </Text>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
               {props.deletable && <TouchableOpacity style={styles.deleteButton} 
                onPress={props.onRemove}>
                <Ionicons
                 name="trash"
                  size={24}
                   color="red" />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    CartItem:{
        padding:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:5,
        elevation:6,
        borderRadius:10

    },
    itemData:{
flexDirection:'row',
alignItems:'center'
    },
    quantity:{
        fontWeight:'bold',
        color: "#ffa000",
        fontSize:16
    },
    title:{
        fontWeight:'bold',
        fontSize:16    
    },
    amount:{
        fontWeight:'bold',
        fontSize:16  
    },
    deleteButton:{
        marginLeft:20
    }
})

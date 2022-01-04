import React,{useState} from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import CartItem from './CartItem'
const OrderItem = (props) => {
    const [showDetails,setShowDetails] = useState(false)
    return (
        <View style={styles.orderItem}>
           <View style={styles.summary}>
               <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
               <Text style={styles.data}>{props.date}</Text>
           </View >
           <Button color="#ffa000"
            title={ showDetails? 'Hide Details': "Show Details"}
            onPress={()=>{
                setShowDetails(prevState => !prevState)
            }}
            />
            {showDetails&&<View style={styles.detailsItem}>
                {props.items.map(cartItem=> 
                <CartItem 
                key={cartItem.productId}
                quantity={cartItem.quantity}
                amount={cartItem.sum}
                title={cartItem.productTitle}
                
                /> )}
                </View>}
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    orderItem:{
elevation:10,
borderRadius:10,
backgroundColor:'white',
margin:20,
padding: 10,
alignItems:'center'
    },
    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        marginBottom:15
    },
    totalAmount:{
        fontSize:16,
        fontWeight:'bold',

    },
    date:{
        fontSize:16,
        color:'#888',
        fontWeight:'bold'
    },
    detailsItem:{
        width:'100%'
    }

})

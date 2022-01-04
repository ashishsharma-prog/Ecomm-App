import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,FlatList,ActivityIndicator} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import OrderItem from '../../components/shopComponent/OrderItem'
import * as orderAction from '../../store/actions/orderAction'
const OrdersScreen = (props) => {
  const [isloading,setIsLoading] = useState(false)
   const orders = useSelector(state=>state.orders.orders)
   const dispatch = useDispatch()
   useEffect(async()=>{
     setIsLoading(true)
     dispatch(orderAction.fetchOrders()).then(()=>{
       setIsLoading(false)
     })
   },[dispatch])
   if(isloading){
     return(
       <View style={styles.centered}>
         <ActivityIndicator size="large" color="teal"/>
       </View>
     )
   }
   return (
       <FlatList   
       data = {orders}
       keyExtractor={item=>item.id}
       renderItem={itemData=><OrderItem
         amount={itemData.item.totalAmount}
         date={itemData.item.readableDate}
         items={itemData.item.items}
         
         />}

       
       
       />
   )
}

export default OrdersScreen

const styles = StyleSheet.create({
  centered:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

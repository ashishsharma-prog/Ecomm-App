import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../../components/shopComponent/CartItem'
import * as cartActions from "../../store/actions/cartAction"
import * as orderActions from "../../store/actions/orderAction"

const CartScreen = (props) => {
    const [isloading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => {
        const tranformedCartItems = [];
        for (const key in state.cart.items) {
            tranformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return tranformedCartItems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1);

    })

    const submitHandler = async () => {
        setIsLoading(true)
        await dispatch(orderActions.addOrder(cartItems, cartTotalAmount))
        setIsLoading(false)
    }

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total:
                    <Text style={styles.amount}>${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</Text>
                </Text>
                {isloading ? (
                <ActivityIndicator size="small" color='teal' />
                ) : (
                    <View style={styles.btn} >
                        <Button color="#ffa000"
                            title="Order Now"
                            disabled={cartItems.length === 0}
                            onPress={submitHandler}

                        />
                    </View>
                )}


            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => <CartItem
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    deletable
                    onRemove={() => {
                        dispatch(cartActions.removeFromCart(itemData.item.productId))
                    }}

                />}
            />
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        height: 50
    },
    summaryText: {
        fontSize: 18,
        marginHorizontal: 10
    },
    amount: {
        color: "black"
    },
    btn: {
        marginHorizontal: 10
    }
})

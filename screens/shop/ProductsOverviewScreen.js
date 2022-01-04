import React, { useEffect, useState,useCallback } from 'react'
import { View, StyleSheet, Text, Button, FlatList, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shopComponent/ProductItem'
import * as productsActions from "../../store/actions/productsActions"

import * as cartActions from "../../store/actions/cartAction"

const ProductsOverviewScreen = props => {
    const [isloading, setIsLoading] = useState(false)
    const [isRefreshing,setIsRefreshing] = useState(false)
    const [error,setError] = useState()
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();

    const loadProducts = useCallback( async () => {
        setError(null)
        setIsRefreshing(true)
        try{
            await dispatch(productsActions.fetchProducts())
        } catch(err){
          setError(err.message)
        }
      
        setIsRefreshing(false)
    },[dispatch,setIsLoading,setError])

    useEffect(()=>{
        const willFocusSub = props.navigation.addListener('Focus',loadProducts)
        
       return willFocusSub
    },[loadProducts])


    useEffect(() => {
        setIsLoading(true)
        loadProducts().then(()=>{
            setIsLoading(false)
        })
    }, [dispatch,loadProducts])




    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        })
    }
    if(error){
        return (
            <View style={styles.centered}>
            <Text>An error occurred!</Text>
            <Button title="Try again" onPress={loadProducts}
            color="teal"
            />
            </View>
        )
    }
    if (isloading==true) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="teal" />
            </View>
        )

    }
    if(!isloading && products.length === 0){
        return (
            <View style={styles.centered}>
            <Text>No products found.Maybe start adding some product!</Text>
            </View>
        )
    }

    return (

        <FlatList
        onRefresh={loadProducts}
        refreshing={isRefreshing}
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>

                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title)
                    }}


                >

                    <Button
                        color="teal"
                        title="View Details"
                        onPress={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title)
                        }}
                    />
                    <Button
                        color="teal"
                        title="Add To Cart"
                        onPress={() => {
                            dispatch(cartActions.addToCart(itemData.item))
                        }}
                    />
                </ProductItem>


            }

        />


    )


}

export default ProductsOverviewScreen

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

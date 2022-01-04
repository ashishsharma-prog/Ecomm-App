import React from 'react'
import { StyleSheet, Text, Button, FlatList } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import ProductItem from "../../components/shopComponent/ProductItem"

import * as productsActions from "../../store/actions/productsActions"


const UserProductScreen = ({navigation}) => {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()
    const editProductHandler=id=>{
        
       navigation.navigate('EditProduct',{productId:id})
    }
    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => (

                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                  onSelect={() => {
                    editProductHandler(itemData.item.id)
                    }}
                >
                    <Button
                        color="teal"
                        title="Edit"
                        onPress={() => {
                            editProductHandler(itemData.item.id)
               
                        }}
                    />
                    <Button
                        color="teal"
                        title="Delete"
                        onPress={() => {
                       dispatch(productsActions.deleteProduct(
                           itemData.item.id
                           ))
                        }}
                    />
                </ProductItem>


            )}


        />
    )
}

export default UserProductScreen

const styles = StyleSheet.create({})

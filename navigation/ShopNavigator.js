import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import HeaderButton from '../components/UI/HeaderButton';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()


function ShopNavigator ( ){

  return (
    <NavigationContainer>

      <Stack.Screen name="ProductOverview"
        component={ProductsOverviewScreen}

      />
      <Stack.Navigator

      >
        <Stack.Screen
          name="DrawerScreen"
          component={myDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductDetail"
          component={ProductDetailsScreen}
          options={({ route }) => ({
            title: route.params?.productTitle,
            headerStyle: {
              backgroundColor: 'teal'
            },

          })}
        />
        <Stack.Screen name="CartScreen"
          component={CartScreen}
          options={({ route }) => ({

            headerStyle: {
              backgroundColor: 'teal'
            },
            title: "Your Cart"

          })}
        />
        <Stack.Screen name="EditProduct" component={EditProductScreen}
          options={({ navigation,route }) => ({
           
            headerStyle: {
              backgroundColor: 'teal'
            },

            title: route.params?.productId?'Edit Product':'Add Product',
            headerRight: () => (
              <TouchableOpacity>
              <AntDesign
                style={{
                   marginHorizontal: 10,
                   overflow: 'hidden'
                  
                  }}
                name="save" size={32}
                color="black"
                
                onPress={route.params?.submit}
              />
              </TouchableOpacity>
            ),
           
          })}

        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
function myDrawer(props) {
  return (
    <Drawer.Navigator
      initialRouteName='ProductOverview'
    >
      <Drawer.Screen name="All Products" component={ProductsOverviewScreen}

        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: 'teal'
          },
          headerRight: () => (
            <HeaderButton onPress={() => {

              navigation.navigate('CartScreen')
            }} />

          ),
        })}
      />
      <Drawer.Screen name="orders" component={OrdersScreen}
        options={({ route }) => ({

          headerStyle: {
            backgroundColor: 'teal'
          },
          title: "Your Orders"

        })}

      />
      <Drawer.Screen name="User Products" component={UserProductScreen}
        options={({ navigation, route }) => ({

          headerStyle: {
            backgroundColor: 'teal'
          },
          headerRight: () => (
            <TouchableOpacity>
            <AntDesign
              style={{
                 marginHorizontal: 10,
                 overflow: 'hidden'
                
                }}
              name="edit" size={32}
              color="black"
              
              onPress={() => {
                navigation.navigate('EditProduct')
              }}
            />
            </TouchableOpacity>
          ),

          title: "Admin"

        })}

      />


    </Drawer.Navigator>
  );
}


export default ShopNavigator
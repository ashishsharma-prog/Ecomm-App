
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore,combineReducers ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import productsReducers from './store/reducers/productsReducers';
import ShopNavigator from './navigation/ShopNavigator';
import cartReducer from './store/reducers/cartReducer';
import orderReducer from './store/reducers/orderReducer';
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
  products:productsReducers,
  cart: cartReducer,
  orders:orderReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return (
   <Provider store={store}>
   <ShopNavigator/>
 
   </Provider>
  );
}

const styles = StyleSheet.create({
 
});

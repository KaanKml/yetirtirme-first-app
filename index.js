/**
 * @format
 */

import {AppRegistry} from 'react-native';
//App kısmı -> default export ile export edilmiş değişken
import App from './StylingLayout/App';
import App2 from './StylingLayout/App2'
import App3 from './StylingLayout/App3'
import App4 from './StylingLayout/App4'

import HomeScreen from './CoreComponents/HomeScreen'

import ShoppingList from './CoreComponents/ShoppingList'
import Counter from './CoreComponents/Counter';
import ShoppingList1 from './State/ShoppingList'
AppRegistry.registerComponent(appName, () => ShoppingList1);
// yorum 
//
//tekil olarak export gelirse 
// import {HelloWorldComponent,age,func} from './App';
// AppRegistry.registerComponent(appName, () => {HelloWorldComponent,age,func});

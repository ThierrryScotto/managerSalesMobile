 import React from "react"
 import { NavigationContainer } from "@react-navigation/native"
 import { createStackNavigator } from "@react-navigation/stack"
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from './home'
import Client from './listClients.js'
import Stoke from './listStock'
import RegisterSale from "./registerSale"
import RegisterClient from "./registerClient"
import RegisterProducts from "./registerProducts";

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='Stoke' component={Stoke} />
      <HomeStack.Screen name='Client' component={Client} />
    </HomeStack.Navigator>
  )
}

export default function Test() {
  return (
   <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen 
         name='Home' 
         component={HomeStackScreen} 
         options={{ title: "Menu"}} />
       <Tab.Screen 
         name='RegisterClient' 
         component={RegisterClient} 
         options={{ title: "Clientes"}} />
       <Tab.Screen 
         name='RegisterProducts' 
         component={RegisterProducts} 
         options={{ title: "Produtos"}} />
       <Tab.Screen 
         name='RegisterSale' 
         component={RegisterSale} 
         options={{ title: "Vendas"}} />
     </Tab.Navigator>
   </NavigationContainer>
  )
}

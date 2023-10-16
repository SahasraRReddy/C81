import React from 'react'
import {Text,View} from 'react-native'
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import {createBottomTabNavigator} from 'react navigation/bottom-tabs.'
import Ionicons from 'react-native-vector-ions/Ionicons'

const Tab = createBottomTabNavigator()

export default class TabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator
            
            screenOptions={({route})=> ({
                tabBarIcon:({focused, color, size})=>{
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused
                        ?'book'
                        :'book-outline'
                    } else if (route.name === 'CreatePost'){
                        iconName = focused?'create':'create-outline'
                    }
                    return <Ionicons name = {iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeintColor:'tomato',
                inactiveTintColor:'gray',
            }}
            
            
            >
                <TabScreen name="Feed" component={Feed}/>
                <TabScreen name="CreatePost" component={CreatePost}/>

            </Tab.Navigator>
        )
    }
}
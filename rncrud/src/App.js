import React from 'react'
import UserForm from './views/UserForm'
import UserList from './views/UserList'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'
import { UsersProvideer } from './context/UsersContexts'

const Stack = createStackNavigator()


export default props => {
    return (
        <UsersProvideer>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" 
                    screenOptions={screenOptions}
                >
                    <Stack.Screen 
                        name="UserList" 
                        component={UserList} 
                        options={({navigation}) => {
                            return {
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    <Button 
                                        onPress={ () => navigation.navigate('UserForm')}
                                        type="clear" 
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )           
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="UserForm" 
                        component={UserForm} 
                        options={{
                            title: "Formulário De Usuários"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvideer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#f4511e"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
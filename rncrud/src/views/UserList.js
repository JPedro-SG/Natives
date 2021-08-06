import React from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'
import users from '../data/users'

export default props => {
    // console.log(Object.keys(props))

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('deleted')
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return(
            <>
                <Button 
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />} 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                />
                <Button 
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />} 
                    onPress={() => confirmUserDeletion(user)}
                />
            </>
        )
    }

    function getUserItem ({item: user}) {
        return (
            <ListItem 
                // rightElement={getActions(user)}
                bottomDivider 
                onPress={() => props.navigation.navigate('UserForm', user)}
            > 
                <Avatar source={{uri: user.avatarUrl}}  />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}
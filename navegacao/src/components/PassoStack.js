import React from 'react'
import { Button, View } from 'react-native'

export default props => {
    return (
        <View style={{flex: 1,}}>
            <View style={props.voltar ? {flexDirection: 'row',justifyContent: 'center'} : false}>
                {props.voltar
                    ? <Button title="Voltar" onPress={() => {props.navigation.goBack()}} />
                    : false
                }
                {props.avancar
                    ? <Button title="Avancar" onPress={() => {props.navigation.navigate(props.avancar, props.avancarParams)}} />
                    : false
                }
            </View>
            <View style={{flex: 1,}}>
                {props.children}
            </View>
        </View>
    )
}
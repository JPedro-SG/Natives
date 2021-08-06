import React from 'react'
import TextCentral from '../components/TextCentral'


export default props => {
    const route = props.route
    const numero = route && route.params && route.params.numero ? route.params.numero : 0
    return (
        <TextCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextCentral>
    )
}
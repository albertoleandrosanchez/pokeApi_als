import React, { useState, useEffect } from 'react'
import logo from './NavImg/pokeapiLogo.png'
import { Nav, LogoImage, Input } from '../Helpers/Elements'

function Navigation({ filtrarPokeList, currPokeList, setErrorMsg }) {
    //states
    const [pokeListLH, setpokeListLH] = useState([])

    //effect
    useEffect(() => {

        setpokeListLH(
            JSON.parse(localStorage.getItem('pokemons'))
        )

    }, [localStorage.getItem('pokemons')]
    )


    //funct
    const filtrarPokemonConElValor_ = async (valor) => {
        if (!pokeListLH) {
            await setpokeListLH(currPokeList)
        }
        else if (!valor) {
            filtrarPokeList([])
        }
        else if (
            pokeListLH.filter(pokemons => pokemons.name.includes(valor.toLowerCase())).length == []
            &&
            valor
        ) {
            filtrarPokeList([])
            console.log('no hay poke')
            setErrorMsg('No se encontraron pokemons con el nombre de: ' + valor)
        }
        else {
            console.log(valor)
            filtrarPokeList(

                pokeListLH.filter(
                    pokemons =>
                        pokemons.name.includes(valor.toLowerCase()))

            )
            setErrorMsg(null)
        }
    }


    return (
        <Nav>
            <LogoImage src={logo} alt="LOGO" roundedCircle />
            <Input
                type='text'
                placeholder="Busca tu pokemon"
                onChange={(e) => filtrarPokemonConElValor_(e.target.value)}
            />
        </Nav>
    )
}

export default Navigation

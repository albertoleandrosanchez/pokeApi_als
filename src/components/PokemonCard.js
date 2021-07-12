/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import { colorTypes } from '../Helpers/helpers'
import './pokemonCard.css'

/*
    Da sombra abajo del pokemon pero las imagenes son del mismo tamaño
    por lo que el efecto no sirve para este ejemplo

const PokeImg_shadow = styled.div`
        position: absolute;
        background-color: #000000;
        border-radius: 50%;
        width: 100%;
        height: 1em;
        opacity: 0.2;
        box-shadow: 0px 0px 10px 6px rgb(0 0 0);
        height: 2em;
        bottom: -5%;
        z-index: 99;
      
`*/

const PokeCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20em;
        border-radius: 1em;
        font-size: large;
        overflow: hidden;
        border: #DDDD solid 1px;
        margin: 1em 0;
        font-family: "Cinzel", serif;
`



const PokeImg_image = styled.img`
    height: 15em;
    position: relative;
`

const PokeImg  = styled.div.attrs(props=>({
        typeOfPoke:colorTypes[props.typeOfPoke]
    })
    )`
    display: flex;
    justify-content: center;
    width: 100%;
    background:linear-gradient(${props=>props.typeOfPoke} ,#ffffff);
    ;    
`

const PokeInfo = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
    width: 80%;
`
const TypeBadge_container = styled.div`
    display: flex;
`

const TypeBadge = styled.p.attrs(props=>({
    type:colorTypes[props.type]
})
)`
    margin:0.2em;
    color:#FFFFFF;
    padding: 0.2em 0.9em;
    border-radius: 0.6em;
    background-color: ${props=>props.type};
`




function PokemonCard({pokemon}) {
    
    const {id,height,name,types,stats,sprites} = pokemon;



    const imagenDelPokemon_ = () => sprites.other['official-artwork'].front_default?
    sprites.other['official-artwork'].front_default:sprites.front_default

    return (
        <PokeCard>
            <PokeImg typeOfPoke={types[0].type.name}>
                    <PokeImg_image src={imagenDelPokemon_()} alt={name}/>
            </PokeImg>
            <PokeInfo>
                <h2>#{id} - {name.toUpperCase()}</h2>
                <TypeBadge_container>
                    {types.map(t=> 
                        <TypeBadge 
                        type={t.type.name}
                        >
                            {t.type.name}
                        </TypeBadge>)}
                    
                </TypeBadge_container>
                <Table size='sm' >
                    <tbody>
                    
                        {stats.map((e)=>
                        <tr>
                            <td>{e.stat.name}</td>
                            <td>{e.base_stat}</td>
                        </tr>
                        )}
                    </tbody>
                </Table>
            </PokeInfo>
        </PokeCard>
    )
}

export default PokemonCard
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Grid, ErrorCartel } from '../Helpers/Elements'
import { getId,sortPokemons } from '../Helpers/helpers'
import { fetchPokemon } from '../Helpers/urlQueries'
import PokemonCard from './PokemonCard'


function PokemonGrid({pokeList,errorMsg}) {
    const [pokemons, setPokemons] = useState([])

    const pushPokemons = ()=>{      
        setPokemons([])  
        pokeList.forEach( async element  => {
          
          await fetchPokemon(getId(element.url)).then(
            res => 
            setPokemons(poke =>[...poke,res])
          )
        }); 
    }


    useEffect(()=>{
        pushPokemons()
        
    },[pokeList])

    return (
        errorMsg?
            <ErrorCartel>
                <p>{errorMsg} </p>
            </ErrorCartel>:
        <Grid>
            {           
            sortPokemons(pokemons).map((poke,id) => <PokemonCard
                pokemon={poke}
                key={id}
            />)}
        </Grid>
    )
}

export default PokemonGrid

import { fetchListof_,endpoints } from './urlQueries';

export const initLocalHost = async () =>{
    if(!localStorage.getItem('pokemons')){
        fetchListof_(`${endpoints.pokemon}?limit=10000`)
            .then(res =>
                localStorage.setItem('pokemons', JSON.stringify(res.results)
                )
            )
    }
}


export const getId = (pokeUrl) =>{
    return pokeUrl.split('/').filter(e=> e !== '').pop()
}

export const sortPokemons = (pokemons) =>{
    return pokemons.sort((a,b) => {
        return a.id - b.id;
    })
}

export const colorTypes = {
    normal: '#A8A77A',
    fire: '#EE8130',
    fighting: '#C22E28',
    water: '#6390F0',
    flying: '#A98FF3',
    grass: '#7AC74C',
    poison: '#A33EA1',
    electric: '#F7D02C',
    ground: '#E2BF65',
    psychic: '#F95587',
    rock: '#B6A136',
    ice: '#96D9D6',
    bug: '#A6B91A',
    dragon: '#6F35FC',
    ghost: '#735797',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};
/*
Normal Type: A8A77A
Fire Type:  EE8130
Water Type:  6390F0
Electric Type:  F7D02C
Grass Type:  7AC74C
Ice Type:  96D9D6
Fighting Type:  C22E28
Poison Type:  A33EA1
Ground Type:  E2BF65
Flying Type:  A98FF3
Psychic Type:  F95587
Bug Type:  A6B91A
Rock Type:  B6A136
Ghost Type:  735797
Dragon Type:  6F35FC
Dark Type:  705746
Steel Type:  B7B7CE
Fairy Type:  D685AD
*/
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

export const colors = {
    light:{
        primary :'#fff5e9',
        secondary:'#ffffff',
        terciary:'#DFB21C',
    },
    dark: {
        primary: '#2196f3',
    },
    borderColor:'#dfb21c',

    colorTypes : {
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
    }
}

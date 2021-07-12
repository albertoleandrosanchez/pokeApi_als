import axios from "../Helpers/axios"

export const endpoints = {
    pokemon:'pokemon',
    ability: 'ability'
}

export const fetchListof_ = async (endpoint) => {
   return await axios.get(endpoint, {
                            params:{
                                offset:0,
                                limit:20
                            }
                            
                            }).then(res =>
                                            res.data
                                            )
}

export const fetchPokemon = async (pokemonid) => {
    return await axios.get('pokemon/'+pokemonid).then(res =>
                                             res.data
                                             )
 }

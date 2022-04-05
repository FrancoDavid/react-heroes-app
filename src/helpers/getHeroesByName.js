import { heroes } from "../data/heroes";


export const getHeroesByName = (name = '') => {

    console.log(name)

    if (name.length === 0)  {

        return [];
    }

    name = name.toLowerCase();

    return heroes.filter(hero => hero.superhero.toUpperCase().includes(name));
}
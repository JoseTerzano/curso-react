import { heroes } from "../data/heroes"

export const getHeroBYId = (id) => {

    return heroes.find( hero => hero.id === id );
}
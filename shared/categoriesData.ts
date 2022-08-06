import Fire from '../assets/categories/fire.svg';
import Bug from '../assets/categories/bug.svg';
import Colorless from '../assets/categories/colorless.svg';
import Dark from '../assets/categories/dark.svg';
import Dragon from '../assets/categories/dragon.svg';
import Electric from '../assets/categories/electric.svg';
import Fairy from '../assets/categories/fairy.svg';
import Fighting from '../assets/categories/fighting.svg';
import Grass from '../assets/categories/grass.svg';
import Normal from '../assets/categories/normal.svg';
import All from '../assets/categories/all.svg';
import Metal from '../assets/categories/metal.svg';
import Water from '../assets/categories/water.svg';

interface ICategoriesData {
    [key: string]: {
        name: string;
        color: string;
        icon: string;
    };
}

export const categoriesData: ICategoriesData = {
    fire: {
        name: 'Fire',
        color: '#F08030',
        icon: Fire,
    },

    bug: {
        name: 'Bug',
        color: '#A8B820',
        icon: Bug,
    },

    colorless: {
        name: 'Colorless',
        color: '#A8B820',
        icon: Colorless,
    },

    dark: {
        name: 'Dark',
        color: '#705848',
        icon: Dark,
    },

    dragon: {
        name: 'Dragon',
        color: '#705848',
        icon: Dragon,
    },

    electric: {
        name: 'Electric',
        color: '#F8D030',
        icon: Electric,
    },

    fairy: {
        name: 'Fairy',
        color: '#EE99AC',
        icon: Fairy,
    },

    fighting: {
        name: 'Fighting',
        color: '#C03028',
        icon: Fighting,
    },

    grass: {
        name: 'Grass',
        color: '#78C850',
        icon: Grass,
    },

    normal: {
        name: 'Normal',
        color: '#A8A878',
        icon: Normal,
    },

    all: {
        name: 'All',
        color: '#A8A878',
        icon: All,
    },

    metal: {
        name: 'Metal',
        color: '#A8A878',
        icon: Metal,
    },

    water: {
        name: 'Water',
        color: '#6890F0',
        icon: Water,
    },
};

import Fire from '../assets/categories/fire.svg';

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

    water: {
        name: 'Water',
        color: '#6890F0',
        icon: Fire,
    },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { GET_POKEMONS_BY_TYPE } from './queryKeys';

export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

export interface Weakness {
    type: string;
    value: string;
}

export interface Images {
    small: string;
    large: string;
}

export interface ICard {
    id: string;
    name: string;
    images: Images;
    subtypes: string[];
    weaknesses: Weakness[];
    attacks: Attack[];
}

export const getPokemonsByType = async (
    type?: string
): Promise<ICard[] | null> => {
    const response = await api.get(`cards?q=types:${type}&pageSize=40&page=1`);

    if (!response.data.data) {
        return null;
    }

    return response.data.data;
};

export const usePokemonsByType = (type?: string) => {
    return useQuery<ICard[] | null>([GET_POKEMONS_BY_TYPE, { type }], () =>
        getPokemonsByType(type)
    );
};

import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { GET_POKEMON_TYPES } from './queryKeys';

export const usePokemonTypes = () => {
    return useQuery<string[]>([GET_POKEMON_TYPES], async () => {
        const { data } = await api.get('types');

        return data.data.map((item: string) => item.toLowerCase());
    });
};

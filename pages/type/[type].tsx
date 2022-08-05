import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Loading from '../../components/Spin';
import { usePokemonsByType } from '../../hooks/usePokemonsByType';

const Type: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;
    const { data, isLoading } = usePokemonsByType(type as string);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.map((pokemon: any) => (
                    <div key={pokemon.id}>
                        <h1>{pokemon.name}</h1>
                    </div>
                ))
            )}
        </div>
    );
};

export default Type;

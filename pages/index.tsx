import { Space, Typography } from 'antd';
import Card from 'antd/lib/card/Card';
import Layout, { Content } from 'antd/lib/layout/layout';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { GET_POKEMONS_BY_TYPE } from '../hooks/queryKeys';
import { getPokemonsByType, ICard } from '../hooks/usePokemonsByType';
import { usePokemonTypes } from '../hooks/usePokemonTypes';
import { queryClient } from '../services/queryClient';
import { Icon } from '../components/Icon/index';
import { categoriesData } from '../shared/categoriesData';

const Home: NextPage = () => {
    const { data, isLoading } = usePokemonTypes();
    const router = useRouter();

    const handlePrefetchPokemonsByType = async (type: string) => {
        await queryClient.prefetchQuery<ICard[] | null>(
            [GET_POKEMONS_BY_TYPE, { type }],
            () => getPokemonsByType(type),
            {
                staleTime: 1000 * 60 * 60 * 24, // 1 day
            }
        );
    };

    return (
        <Layout>
            <Content>
                <Space align="center" wrap size="middle">
                    {isLoading
                        ? 'Loading...'
                        : data?.map((type: string) => (
                              <Card
                                  key={type}
                                  onClick={() =>
                                      router.push(`type/${type.toLowerCase()}`)
                                  }
                                  onMouseEnter={() => {
                                      handlePrefetchPokemonsByType(type);
                                  }}
                                  hoverable
                                  style={{ width: 240 }}
                              >
                                  <Typography.Title level={4}>
                                      <Icon
                                          color={categoriesData[type]?.color}
                                          icon={categoriesData[type]?.icon}
                                      />
                                  </Typography.Title>
                              </Card>
                          ))}
                </Space>
            </Content>
        </Layout>
    );
};

export default Home;

import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { fechData } from '../../utils/fetchData';
import { Games } from '../../utils/games';

import { Container, Content, GameElement, GameList, GameInfo } from './styles';

interface FetchedGame extends Games {
    involved_companies: InvolvedCompany[];
}

interface InvolvedCompany {
    company: {
        name: string;
    },
    publisher: boolean;
}

const SearchBar: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [fetchedData, setFetchedData] = useState<FetchedGame[]>([]);
    const [inputValue, setInputValue] = useState('');

    const searchGames = useCallback(() => {
        if (!inputValue) {
            setFetchedData([]);
            return;
        }

        fechData<FetchedGame[]>('https://api.igdb.com/v4/games',
            `fields name, cover.url, involved_companies.company.name, involved_companies.publisher; where name ~*"${inputValue}"* & category = 0; sort hypes asc; limit 5;`
        ).then(response => {
            const games = response.map(game => {
                return {
                    ...game,
                    cover: {
                        url: game.cover?.url?.replace('t_thumb', 't_1080p')
                    }
                }
            })
            setFetchedData(games);
        });
    }, [inputValue])

    useEffect(() => {
        const timer = setTimeout(() => {
            searchGames();
        }, 150);

        return () => {
            clearTimeout(timer);
        }

    }, [inputValue, searchGames])

    const handleBlur = useCallback(() => {
        setIsFocused(false);
        setFetchedData([]);
    }, [])

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    const getGamePublishers = useCallback((game: FetchedGame) => {
        if (!game.involved_companies || game.involved_companies.length === 0)
            return undefined;

        const publishers = game.involved_companies.filter(company => company.publisher);
        return publishers.map(company => company.company.name).join(' - ');
    }, [])

    return (
        <Container
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
        >
            <Content isFocused={isFocused}>
                <input
                    placeholder="Search for your games"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <FiSearch color='#000000' />
            </Content>
            {fetchedData.length > 0 && isFocused && (
                <GameList>
                    {fetchedData.map(game => (
                        <GameElement key={game.id}>
                            <img src={game.cover?.url ?? `https://dummyimage.com/600x400/404040/ffffff&text=${game.name}`} alt={game.name} />
                            <GameInfo>
                                <strong>{game.name}</strong>
                                <p>{getGamePublishers(game)}</p>
                            </GameInfo>
                        </GameElement>
                    ))}
                </GameList>
            )}
        </Container>
    )
}

export default SearchBar;
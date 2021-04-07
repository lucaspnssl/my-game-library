import React, { useEffect, useState } from 'react';
import { fechData } from '../../../utils/fetchData';
import { Games } from '../../../utils/games';

import { Container, GameList, GameCard, Content } from './styles';

const MyGames: React.FC = () => {
    const [games, setGames] = useState<Games[]>([]);

    useEffect(() => {
        fechData<Games[]>('https://api.igdb.com/v4/games', "fields id, name, cover.url; where name ~ *\"Dark Souls\"*; limit 10;")
            .then(response => {
                const games = response.map(game => {
                    return {
                        ...game,
                        cover: {
                            url: game.cover?.url?.replace('t_thumb', 't_1080p')
                        }
                    }
                })
                setGames(games);
            });
    }, []);

    return (
        <Container>
            <Content>
                <GameList>
                    {games.map(game => (
                        <GameCard key={game.id}>
                            <img src={game.cover?.url ?? `https://dummyimage.com/600x400/404040/ffffff&text=${game.name}`} alt={game.name} />
                            <p>{game.name}</p>
                        </GameCard>
                    ))}
                </GameList>
            </Content>
        </Container>
    );
}

export default MyGames;
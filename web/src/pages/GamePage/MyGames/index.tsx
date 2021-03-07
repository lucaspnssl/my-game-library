import React, { useEffect, useState } from 'react';
import { fechData } from '../../../utils/fetchData';

import { Container, GameList, GameCard, Content } from './styles';

interface Games {
    id: string
    name: string;
    cover?: string;
    cover_url?: string;
}

interface CoversResponse {
    id: string;
    url: string;
}

const Dashboard: React.FC = () => {
    const [filteredGames, setGamesFilteredGames] = useState<Games[]>([]);

    useEffect(() => {
        fechData<Games[]>('https://api.igdb.com/v4/games', "fields id, name, cover; where name ~ *\"Dark Souls\"*; limit 10;")
            .then(response => {
                const games = response;
                const coversIds = games
                    .filter(game => game.cover)
                    .map(game => game.cover);

                fechData<CoversResponse[]>('https://api.igdb.com/v4/covers', `fields id, url; where id = (${coversIds.join()});`)
                    .then(coverResponse => {
                        coverResponse.forEach(cover => {
                            const gamesWithCover = games.filter(game => game.cover === cover.id);
                            gamesWithCover.forEach(game => {
                                games[games.indexOf(game)] = {
                                    ...game,
                                    cover_url: cover.url
                                }
                            })
                        })
                        setGamesFilteredGames(games);
                    });
            });
    }, []);

    return (
        <Container>
            <Content>
                <GameList>
                    {filteredGames.map(game => (
                        <GameCard key={game.id}>
                            <img src={game.cover_url ?? `https://dummyimage.com/600x400/404040/ffffff&text=${game.name}`} alt={game.name} />
                            <p>{game.name}</p>
                        </GameCard>
                    ))}
                </GameList>
            </Content>
        </Container>
    );
}

export default Dashboard;
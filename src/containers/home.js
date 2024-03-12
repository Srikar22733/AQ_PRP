import React from 'react'
import MovieCard from '../components/movieCard'
import { Box, Grid } from '@mui/material'
const Home = () => {

    const moviesList = [
        {
            title: 'The Shawshank Redemption',
            image: '/shawshank.jpg',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Godfather',
            image: '/godfather.jpg',
            description: 'An organized crime dynastys aging patriarch transfers control of his clandestine empire to his reluctant son.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Dark Knight',
            image: '/dark_knight.jpg',
            description: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Inception',
            image: '/inception.jpg',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Forrest Gump',
            image: '/forrest_gump.jpg',
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Matrix',
            image: '/the_matrix.jpg',
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Pulp Fiction',
            image: '/pulp_fiction.jpg',
            description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Lord of the Rings: The Return of the King',
            image: '/return_of_the_king.jpg',
            description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Fight Club',
            image: '/fight_club.jpg',
            description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Forrest Gump',
            image: '/forrest_gump.jpg',
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Inception',
            image: '/inception.jpg',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Dark Knight',
            image: '/dark_knight.jpg',
            description: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Schindler\'s List',
            image: '/schindlers_list.jpg',
            description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Godfather',
            image: '/godfather.jpg',
            description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Shawshank Redemption',
            image: '/shawshank.jpg',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Seven Samurai',
            image: '/seven_samurai.jpg',
            description: 'A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Saving Private Ryan',
            image: '/saving_private_ryan.jpg',
            description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'Goodfellas',
            image: '/goodfellas.jpg',
            description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
        {
            title: 'The Silence of the Lambs',
            image: '/silence_of_the_lambs.jpg',
            description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
            buttonText1: 'Watch Now',
            buttonText2: 'More Info'
        },
    ]
    return (
        <>
            <Box sx={{padding:'50px', border:'2px solid red', bgcolor:'black'}}>
                <Grid container >
                    {
                        moviesList.map((movies, index) => (
                            <Grid item
                                sx={{ display: 'grid', placeItems: 'center', padding: 2 }}
                                xs={12} sm={6} md={4} lg={3} xl={2}
                                key={index}
                            >
                                <MovieCard
                                    key={index}
                                    imageurl={movies.image}
                                    imgtitle={movies.description}
                                    movietitle={movies.title}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </>
    )
}

export default Home
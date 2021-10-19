const API_KEY='API_KEY';
const API_BASE= 'API_BASE';


/*
-Movies Original
-trending
-top rated
-action
-horroble
-comedy
-documentary
*/
// fuction send endpoint and return json 
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); // request
    const json  = await req.json(); // get the json
    return json;//return 

}
export default{
getHomeList: async()=>{
    return[
        {
            slug: 'originals',
            title: 'Originals from Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) // 213 just get netflix movies (originals)
        },
        {
            slug: 'trending',
            title: 'Recommended for you',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) 
        },
        {
            slug: 'toprated',
            title: 'Top Rated',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) 
        },
        {
            slug: 'action',
            title: 'Action',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) // 28 for action
        },
        {
            slug: 'comedy',
            title: 'Comedy',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) // 35 for comedy
        },
        {
            slug: 'horror',
            title: 'Horror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) // 27 for horror
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) // 10749 for romance
        },
        {
            slug: 'documentary',
            title: 'Documentary',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) // 99 for doc
        },


    ];
},
getMovieInfo: async (movieId, type) =>{
    let info = {};

    if(movieId){
        switch(type){
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);

            break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);

            break;
            default:
                info=null;
            break;
        }
    }
 return info;
}
}

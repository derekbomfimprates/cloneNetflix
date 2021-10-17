import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import MovieRow from'./components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';

export default () => {


  const [movieList, setMovieList] = useState([]); // set to start empty
  const [featuredData, setFeaturedData] = useState(null); // I am going to start it as null

  useEffect(() =>{
    const  loadAll = async()=>{
      // GEt list movie
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // get the movie featured

      let originals = list.filter(i=> i.slug === 'originals'); // just getting movie from originals from netflix 
      // getting a random movie
      let randomChosen = Math.floor(Math.random()* (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      
    }
loadAll();
  }, []);
  return (
    /*   
    Header
    highlights
    lists  
    Footer 
    We are going to use map
    */
  <div className="page">
  
    {featuredData &&  
    <FeaturedMovie item={featuredData} /> // when the component exist i will show it and send the item!
    }
    
    <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title= {item.title} items={item.items}/>
      ))}
    </section>
 
    </div>
    );
}

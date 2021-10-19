import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import MovieRow from'./components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from "./components/Footer";

export default () => {


  const [movieList, setMovieList] = useState([]); // set to start empty
  const [featuredData, setFeaturedData] = useState(null); // I am going to start it as null
  const [colorHeader, setColorHeader] = useState(false);

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

  useEffect(()=>{
    const scrollistener =()=>{
      if(window.scrollY > 10){
        setColorHeader(true);
      }else{
        setColorHeader(false);
      }

      
      }
      window.addEventListener('scroll', scrollistener);
      return()=>{
        window.removeEventListener('scroll', scrollistener);
    }
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
    <Header color={colorHeader}/>
  
    {featuredData &&  
    <FeaturedMovie item={featuredData} /> // when the component exist i will show it and send the item!
    }
    
    <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title= {item.title} items={item.items}/>
      ))}
    </section>
 <Footer />
 
 {movieList.length <=0 &&
 <div className="loading">
      <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Loading" />
    </div>
}
    </div>
    
    );
}

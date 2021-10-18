import react from "react";
import "./FeaturedMovie.css";

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres=[];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }


  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vert">
        <div className="featured--horiz">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
              <div className="featured--vote_average">
                  {item.vote_average} point{item.vote_average !== 1 ? 's' : ''} </div>
                  <di className="featured--year">
                      {firstDate.getFullYear()}
                  </di>
                  <div className="featured--seasons">
                      {item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}
                  </div>
                  <div className='featured--overview'>
                      {item.overview}
                  </div>
                  <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watch">▶︎ Watch</a> 
                        <a href={`/list/add/${item.id}`} className="featured--mylist">+ My list</a> 

                  </div>
                  <div className="featured--genres"><strong>Genre: </strong>{genres.join(', ')}</div>


              
          </div>
        </div>
      </div>
    </section>
  );
};
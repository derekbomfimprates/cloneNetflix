import react from 'react';
import './FeaturedMovie.css';

export default ({item})=>{
    return(
      <section className= "featured">
          <div className="">
              {item.original_name}
          </div>
      </section>
    )
}
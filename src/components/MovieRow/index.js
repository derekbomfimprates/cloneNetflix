import React, {useState}from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



export default ({ title, items }) => {

  const [scrollSlide, setScrollSlide] = useState(0);

  const handleLeft =()=>{

    let x= scrollSlide+ Math.round(window.innerWidth/2);
    if(x>0){
      x=0;
    }
    setScrollSlide(x);
  }
  const handleRight =()=>{
    let x = scrollSlide - Math.round(window.innerWidth/2);
    let listWidht = items.results.length * 150;
    if((window.innerWidth - listWidht) > x){
      x=(window.innerWidth - listWidht) -60;
    }
    setScrollSlide(x);    
  }
  return (
    <div className="movieRow">
      <h2>{title}</h2>
<div className="movieRow--toLeft" onClick={handleLeft}>
<NavigateBeforeIcon style={{fontSize:50}} />
</div>
<div className="movieRow--toRight" onClick={handleRight}>
<NavigateNextIcon style={{fontSize:50}} />
</div>

      <div className="movieRow--listArea">
        <div className="movieRow--list" style={{
          marginLeft: scrollSlide,
          width:items.results.length*150  
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              /* size w300 */
              <div key ={key}className="movieRow--item">
                <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              /> 
                </div>
              
            ))}
        </div>
      </div>
    </div>
  );
};

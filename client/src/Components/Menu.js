import React from 'react';
import noimg from './noimg.png'
import {Button} from 'react-bootstrap';
const Menu = ({show,View,setmovie,setview}) => {
    const handleView = () =>{ setview(false);
        setmovie(show);
    }
    var imgstr=noimg;
    setmovie(show);
    if(show.image!=null)imgstr=show.image.medium;

  return (
    
    <div className="card text-center bg-secondary mb-3">
        <div className="card-body">
              <img className="card-img-top" src={imgstr} />
              <h1 className="text-center">
                {show.name}
              </h1>
                  <button type="button" className="btn btn-dark" onClick={() => handleView()} >View More</button>
                  
            </div>
    </div>
  )
}

export default Menu
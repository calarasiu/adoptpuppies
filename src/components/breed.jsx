import React, {useState} from 'react';
import BreedImages from './breedImages';

const Breed = ({breed}) => {
  const[images, setImages]=useState([])

  const showImages=(breed)=>{
    fetch(`https://dog.ceo/api/breed/${breed.breed}/images`)
    .then((data)=>data.json())
    .then(images=>setImages(images.message))

  }


 
  return (
    <div className='breed'>
      {breed === 'pekinese'?<button onClick={()=>showImages({breed})}>Pekinese</button>:<button onClick={()=>showImages({breed})}>Papillon</button>}
      
      <BreedImages images={images.slice(0,10)}  />
    </div>
  )
}

export default Breed

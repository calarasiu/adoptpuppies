import {useState} from 'react';
import PuppyImage from './puppyImage';

const BreedImages = ({images}) => {
  const [stateImages, setImages]=useState([])
  // setImages false because otherwise I cannot see the images when I click on breed btn
  const remove = (toDelete)=>{
    console.log('images-before-deleting',images.length);
    images.splice(toDelete, 1);
    console.log(images.splice(toDelete, 1));
    setImages(images)
    console.log('toDelete',toDelete);
    console.log('images-after-deleting',images.length);   
  }
 
  return (
    <div className='breedImages'>
      {images.map((image, i)=> <PuppyImage remove={remove} id={i} key={i} image={image} />)}
    </div>
  )
}

export default BreedImages

import React from 'react'

const puppyImage = ({image, remove, id}) => {

  const removeImage=()=>{
    console.log('puppy-to-delete', id)
    remove({id});
  }
  return (
    <div  onClick={removeImage}>
      {console.log("puppy",id)}
      <img className='puppy' src={image} alt="puppy"></img>
    </div>
  )
}

export default puppyImage

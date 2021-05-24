import React from 'react';
import Breed from './breed';

const Breeds = ({breeds}) => {
  
  return (
    <div className='breeds'>
      <h3>Our Puppies Are Already Trained for a Home</h3>
      <p>Even though living in a dog rescue isn't ideal, our staff is assisting the dogs in more ways than just keeping them alive. Dogs can be socialized with other animals that help make them kinder and playful with all types of animals. We use foster homes, where puppies and kittens for adoption are socialized with children and other dogs and cats, and given essential obedience training before they go to their new homes.</p>
      <h3>We will help with adopting the right dog</h3>
      <p>Shelter workers are very careful to make sure their dog adoptions go well and their dogs end up in the best homes for dog and owner. Each organization has its own dog adoption application and screening process for potential adopters. Since pet rescues spend so much time with their dogs, they are able to match you up with the perfect companion for you. Volunteers also follow up with you after the adoption to make sure everything's going well. They can help you get through any rough spots by offering dog training tips and lots of other advice. Adopting from a pet rescue group has another benefit: if, for some reason, things don't work out with your new dog, most rescues will take the dog back, saving you a lot of trouble. Each rescue has its own dog adoption process for screening; this process is designed to make sure you end up with the right dog for your family. </p>
      
      <h3>Choose one of our breeds to discover your new friend</h3>
      <h4>In an effort to help people make good choices when they chose dog adoption, we specialize in small dogs</h4>

      {breeds.map((breed, i)=><Breed breed={breed} key={i} /> )}

    </div>
  )
}

export default Breeds

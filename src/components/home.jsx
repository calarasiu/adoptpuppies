import React, {useState} from 'react';

const Home = ({showButtons}) => {
  const buttons=()=>{
    showButtons()
  }
  return (
    <div className='home'>
      <h1>Adopt a dog - not for lockdown, but for life!</h1>
      <h3>We believe that a dog can lift our mood, change our day, keep us active and transform a house into a home.</h3>
      <h3>They offer freely what humans can spend a lifetime learning – the ability to love unconditionally. They save our lives in so many ways; we owe it to dogs to return this amazing loyalty.By adopting a dog through Adopt a lost puppy, you’ll be playing a vital part in ending the struggle of stray dogs. Sincerely, we want to thank you for choosing to rescue a dog who needs your help more than most. </h3>
      <h3>If you’re ready to find your perfect companion</h3>
      
      <button onClick={buttons}>Adopt one of our puppies</button>

      
    </div>
  )
}

export default Home

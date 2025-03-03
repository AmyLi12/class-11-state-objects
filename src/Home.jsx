import { useState } from 'react'

import BusinessCard from './components/BusinessCard'
import ImageSelector from './components/ImageSelector'
import Gallery from './components/Gallery'
import Accordion from './components/Accordion'
import ChatBot from './components/ChatBot'
import DarkModeSwitcher from './components/DarkModeSwitcher'

export default function Home() {

  const[cardData, setCardData] = useState({
    name:"Ezra Cornell",
    email:"ezra@cornell.edu",
    description:"Ezra Cornell co-founded Cornell University in 1865.",
    image:'/images/cornell-seal-black.svg'
  });

  return (
    <main>
      <DarkModeSwitcher />

      <h2>Business Card</h2>
      <BusinessCard
        image={cardData.image}
        name={cardData.name}
        email={cardData.email}
        description={cardData.description}
      />
      <ImageSelector
      onChange{(url) => setCardData((v) => ({...v, image: url}))}
      // onChange={(url) => setBusinessCardImage(url)}
      />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name" value={cardData.name} onChange={(e) => setCardData((v) => ({...v, name: e.target.value}))}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={cardData.email} onChange={(e) => setCardData((v) => ({...v, email: e.target.value}))}/>
      </div>

      <h2>Gallery Example</h2>
      <Gallery />

      <h2>Accordion Example</h2>
      <Accordion />

      <h2>ChatBot UI</h2>
      <ChatBot />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}

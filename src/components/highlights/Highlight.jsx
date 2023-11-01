import React, { useEffect, useState } from 'react'
import { HighlightCard } from './HighlightCard'

export const Highlight = () => {

  const [hData, setHdata] = useState(
    [
    {
      "title": "Surfing",
      "description": "Best Hawaiian islands for surfing.",
      "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png"
    },
    {
      "title": "Traditional Festivals",
      "description": "Best places to attend traditional festivals in Hawaii",
      "image": "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png"
    },
    {
      "title": "Volcanoes",
      "description": "Volcanic conditions can change at any time.",
      "image": "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png"
    }
    ]
  )



  return (
    <div className='d-flex justify-content-center'>
        {
            hData.map((val) =>{
                return  <HighlightCard image={val.image} title={val.title} description={val.description}/>
            })
        }
       

    </div>
  )
}

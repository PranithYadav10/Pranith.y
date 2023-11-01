import React from 'react'
import { useParams } from 'react-router-dom'

export const ActivityPage = () => {

    const {activity_type} = useParams()
    console.log(activity_type)

    `https://web-dev.dev.kimo.ai/v1/activities/${activity_type}`
    
  return (
    <div>ActivityPage - {activity_type}</div>
  )
}

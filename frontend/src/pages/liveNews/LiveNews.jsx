import React from 'react'
import News from '../../components/liveNews/News'
const LiveNews = ({handleNewsToggle}) => {
  return (
    <div>
      <News newsToggle={handleNewsToggle}/>
    </div>
  )
}

export default LiveNews

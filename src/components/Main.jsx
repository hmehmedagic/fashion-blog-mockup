import React from 'react'
import Article from './Article'

const Main = ({articles}) => {
  return (
    <div className='app_main'>
        {articles.map(article => {
            return <Article post={article}/>
        })}
    </div>
  )
}

export default Main
import React from 'react'
import Article from './Article'

const Main = ({articles}) => {
  return (
    <div className='articler'>
        {articles.map(article => {
            return <Article post={article}/>
        })}
    </div>
  )
}

export default Main
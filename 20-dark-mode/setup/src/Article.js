import React from 'react'

const Article = ({title,date, length, snippet})=>{

  return <div className="post">
  <h2>{title}</h2>
  <div className="post-info">
    <span>{date.toLocaleString('en-US',{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})}</span>
    <span>{length} min read</span>
  </div>
    <p>{snippet}</p>
</div>
}

export default Article

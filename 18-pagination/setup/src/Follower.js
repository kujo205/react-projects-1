import React from 'react'
const defimg='https://avatars.githubusercontent.com/u/649177?v=4';
const Follower = ({url,img,login}) => {
  return <article className="card">
    <img src={img} alt="" />
    <h4>{login}</h4>
    <a href={url} className='btn'>view profile</a>
  </article>
}

export default Follower

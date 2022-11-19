import React from 'react'
const defsrc='https://images.unsplash.com/photo-1567877357967-246600b931f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MHwxfHNlYXJjaHwxfHxhc3xlbnwwfHx8fDE2Njg4MzgyODg&ixlib=rb-4.0.3&q=80&w=1080';
const defuser='https://images.unsplash.com/profile-1565883771903-605d8960706aimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64';
const defsite='https://gantasv.com/';
const Photo = ({id,likes,img,authorImg,authorName,authorUrl}) => {
  return <article className='photo'>
    <img src={img} alt=""/>
    <div className="photo-info">
      <div>
        <h4>{authorName}</h4>
        <p>{likes} likes</p>
      </div>
      <a href={authorUrl}>
        <img src={authorImg} alt="" className='user-img'/>
      </a>
    </div>
  </article>
}

export default Photo

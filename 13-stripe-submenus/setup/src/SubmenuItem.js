import React from 'react'

export default function SubmenuItem({item:e}) {
  return (
    <article>
          <h4>{e.page}</h4>
          <div className="sidebar-sublinks">
          {e.links.map((link,i)=>
            <a key={i} 
            href={link.url}>
            {link.icon}{link.label}
            </a>)}
        </div>
        </article>)
  
}

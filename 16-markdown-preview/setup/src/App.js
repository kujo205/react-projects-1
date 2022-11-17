import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [text,setText]=useState('# markdown preview');


  return(
  <main>
    <section className="markdown">
      <textarea name="" id="" cols="10" rows="1" className="input" onChange={(e)=>setText(e.target.value)}>
        {text}
      </textarea>
      <article className="result">
      <ReactMarkdown>
        {text}
      </ReactMarkdown>
      </article>
    </section>
  </main>)
}

export default App

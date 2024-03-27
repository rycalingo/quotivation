import React from 'react';

const QuoteCard = ({ quote }) => {
  const { author, text } = quote;
  
  return (
    <article className='quote-card'>
      <div>
        <h3>{text}</h3>
      </div>
      <footer>
        <p className='author'>{author}</p>
      </footer>
    </article>
  )
}

export default QuoteCard;
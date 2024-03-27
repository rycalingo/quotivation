import React from 'react';

const QuoteCard = ({ quote }) => {
  const { author, text, categories } = quote;
  
  return (
    <article className='quote-card'>
      <div>
        <p className='categories'>{categories.join(' ')}</p>
        <h3>{text}</h3>
      </div>
      <footer>
        <p className='author'>{author}</p>
      </footer>
    </article>
  )
}

export default QuoteCard;
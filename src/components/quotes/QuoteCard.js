import React from 'react';
import { Heart } from 'react-feather';

const QuoteCard = ({ quote, addToFavorites}) => {
  const { author, text, categories, id } = quote;
  
  return (
    <article className='quote-card'>
      <div>
        <p className='categories'>{categories.join(' ')}</p>
        <h3>{text}</h3>
      </div>
      <footer>
        <p className='author'>{author}</p>
        <p className="add-favorite" onClick={()=> addToFavorites(id)}><Heart /></p>
      </footer>
    </article>
  )
}

export default QuoteCard;
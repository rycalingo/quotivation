import React from 'react';

const FavoriteQuoteCard = ({ quote, removeFromFavorites }) => {
	const { author, text, id } = quote;

	return (
		<li className='quote-card'>
			<span className='close-quote' onClick={() => removeFromFavorites(id)}>
				x
			</span>
			<h3>{text}</h3>
			<p>{author}</p>
		</li>
	);
};

export default FavoriteQuoteCard;

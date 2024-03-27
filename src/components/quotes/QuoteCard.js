import React from 'react';
import { Heart } from 'react-feather';

const QuoteCard = ({ quote, addToFavorites, favoriteQuotes }) => {
	const { author, text, categories, id } = quote;

	const alreadyFavorite = favoriteQuotes.find((q) => q.id === id);

	const faveStyle = alreadyFavorite ? '#333' : '';

	const renderCategories = (category) => {
		return (
			<span className='category' key={category}>{category}</span>
		);
	};
	return (
		<article className='quote-card'>
			<div>
				<p className='categories'>{categories.map(renderCategories)}</p>
				<h3>{text}</h3>
			</div>
			<footer>
				<p className='author'>{author}</p>
				<p className='add-favorite' onClick={() => addToFavorites(id)}>
					<Heart style={{ fill: faveStyle }} />
				</p>
			</footer>
		</article>
	);
};

export default QuoteCard;

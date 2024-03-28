import React from 'react';
import FavoriteQuoteCard from './FavoriteQuoteCard';

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
	const renderFavorites = (quote, index) => {
		return <FavoriteQuoteCard key={quote.id} listPosition={index+1} quote={quote} removeFromFavorites={removeFromFavorites} />;
	};

	const available = maxFaves - favoriteQuotes.length;

	return (
		<section className='favorite-quotes'>
			<div className='wrapper quotes'>
				<h3>Top 3 favorite quotes</h3>
				{favoriteQuotes.length > 0 && (<ul>{favoriteQuotes.map(renderFavorites)}</ul>)}

				{favoriteQuotes.length < maxFaves && (
					<div className='favorite-quotes-description'>
						<p>
							You can add {available} more quote{available !== 1 && 's'} to your top three favorites by selecting from the options below.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default FavoriteQuotes;

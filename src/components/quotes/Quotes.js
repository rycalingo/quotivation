import React from 'react';
import QuoteCard from './QuoteCard';
import CategoryForm from './CategoryForm';

const Quotes = ({ quotes, category, categories, handleCategoryChange, addToFavorites, favoriteQuotes }) => {
  
	const renderQuoteCards = (quote) => {
		return <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />;
	};
 
	return (
		<section className='all-quotes'>
			<div className='quotes wrapper'>
				<div className='category-header'>
					<h2>Pick your Favorite Quotes Below</h2>
					<p>You have {quotes.length > 1 && 'a collection of'} {quotes.length} great
					{category !== categories[0] && category} quote{quotes.length !== 1 && 's'}!</p>
					<CategoryForm	
						category={category} categories={categories} handleCategoryChange={handleCategoryChange}
					/> 
				</div>
				{quotes.map(renderQuoteCards)}
			</div>
		</section>
	);
};

export default Quotes;

import React from 'react';
import QuoteCard from './QuoteCard';
import CategoryForm from './CategoryForm';

const Quotes = ({ quotes, category, categories, handleCategoryChange }) => {
  
	const renderQuoteCards = (quote) => {
		return <QuoteCard key={quote.id} quote={quote} />;
	};

	return (
		<section className='all-quotes'>
			<div className='quotes wrapper'>
				<div className='category-header'>
					<p>Browse through your collection of quotes</p>
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

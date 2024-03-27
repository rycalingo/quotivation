import React from 'react';
import QuoteCard from './QuoteCard';

const Quotes = ({ quotes }) => {
  
	const renderQuoteCards = (quote) => {
		return <QuoteCard key={quote.id} quote={quote} />;
	};

	return (
		<section className='all-quotes'>
			<div className='quotes wrapper'>{quotes.map(renderQuoteCards)}</div>
		</section>
	);
};

export default Quotes;

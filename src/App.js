import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Loader } from 'react-feather';

import Quotes from './components/quotes/Quotes';

import './App.css';

function App() {
	const [quotes, setQuotes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [category, setCategory] = useState('All');
	const [favoriteQuotes, setFavoriteQuotes] = useState([]);

	const categories = ['All', 'Leadership', 'Empathy', 'Motivation', 'Learning', 'Success', 'Empowerment'];
	const maxFaves = 3;

	const filteredQuotes = category !== 'All' ? quotes.filter((quote) => quote.categories.includes(category)) : quotes;

	const quotesUrl =
		'https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js';

	const fetchQuotes = async () => {
		try {
			setIsLoading(true);
			const request = await fetch(quotesUrl);
			const results = await request.json();

			if (request.status === 200) setQuotes(results);
		} catch (error) {
			console.log('Error fetching -', error);
		}
		setIsLoading(false);
	};

	const handleCategoryChange = (selected) => {
		console.log(selected);
		setCategory(selected);
	};

	const addToFavorites = (quoteId) => {
		const selectedQuote = quotes.find((q) => q.id === quoteId);
		const alreadyFavorite = favoriteQuotes.find((q) => q.id === selectedQuote.id);

		if (alreadyFavorite) {
			console.log('This quote is already in your favorites! Choose another');
		} else if (favoriteQuotes.length < maxFaves) {
			setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
			console.log('Added to favorites!');
		} else {
			console.log('Max number of Favorite Quotes reached. Please delete one to add another!');
		}
	};

	useEffect(() => {
		fetchQuotes();
	}, []);

	return (
		<div className='App'>
			<Header />
			<main>
				<section className='favorite-quotes'>
					<div className='wrapper quotes'>
						<h3>Top 3 favorite quotes</h3>
						<div className='favorite-quotes-description'>
							<p>You can add up to three favorites by selecting from the options below. <br /> Once you choose, they will appear here.</p>
						</div>
					</div>
				</section>
				{isLoading ? (
					<Loader />
				) : (
					<Quotes
						quotes={filteredQuotes}
						category={category}
						categories={categories}
						handleCategoryChange={handleCategoryChange}
						addToFavorites={addToFavorites}
					/>
				)}
			</main>
			<Footer />
		</div>
	);
}
export default App;

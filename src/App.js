import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Loader } from 'react-feather';

import Quotes from './components/quotes/Quotes';
import FavoriteQuotes from './components/quotes/FavoriteQuotes';

import Message from './components/Message'

import './App.css';

function App() {
	const [quotes, setQuotes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [category, setCategory] = useState('All');
	const [favoriteQuotes, setFavoriteQuotes] = useState([]);

	const categories = ['All', 'Leadership', 'Empathy', 'Motivation', 'Learning', 'Success', 'Empowerment'];
	const maxFaves = 3;

	const filteredQuotes = category !== 'All' ? quotes.filter((quote) => quote.categories.includes(category)) : quotes;

	const [messageText, setMessageText] = useState("");
	const [showMessage	, setShowMessage] = useState(false);

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
			setMessageText('This quote is already in your favorites! Choose another.');
			setShowMessage(true);
		} else if (favoriteQuotes.length < maxFaves) {
			setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
			setMessageText('Added to favorites!');
			setShowMessage(true);
		} else {
			setMessageText('Max number of Favorite Quotes reached. Please delete one to add another!');
			setShowMessage(true);
		}
	};

	const removeFromFavorites = (quoteId) => {
		const updatedFaves = favoriteQuotes.filter((q) => q.id !== quoteId);
		setFavoriteQuotes(updatedFaves);
	};

	const removeMessage = () => setShowMessage(false);;

	useEffect(() => {
		fetchQuotes();
	}, []);

	return (
		<div className='App'>
		{showMessage && <Message messageText={messageText} removeMessage={removeMessage} />}
			<Header />
			<main>
				<FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={maxFaves} removeFromFavorites={removeFromFavorites} />
				{isLoading ? (
					<Loader />
				) : (
					<Quotes
						quotes={filteredQuotes}
						category={category}
						categories={categories}
						handleCategoryChange={handleCategoryChange}
						addToFavorites={addToFavorites}
						favoriteQuotes={favoriteQuotes}
					/>
				)}
			</main>
			<Footer />
		</div>
	);
}
export default App;

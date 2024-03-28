import React, { useEffect } from 'react';

const Message = ({ messageText, removeMessage }) => {

	useEffect(()=> {
		const delayTimer =  window.setTimeout(() => removeMessage(),  1500);
		return () => window.clearTimeout(delayTimer);
	});

	return (
		<div className='message'>
			<p>{messageText}</p>
			<span className='close-message' onClick={() => removeMessage()}>
				X
			</span>
		</div>
	);
};

export default Message;

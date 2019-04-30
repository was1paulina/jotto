import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
	return(
		<div />
		)
};

GuessedWords.PropTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequiered,
			letterMatchCount: PropTypes.number.isRequiered,
		})
	).isRequiered,
};

export default GuessedWords;


import React from 'react';
import { Filter } from "react-feather";

const CategoryForm = ({category, categories, handleCategoryChange}) => {

	const categoryOptions = (option, i) => {
		return  <option key={i} value={option}>{option}</option>
	}

	const selectHandler = (e) => {
		handleCategoryChange(e.target.value);
	};

	return (
		<div className='category-form'>
			<form className='category-filter'>
        <Filter />
				<label htmlFor='category'>Filter Quotes:</label>
				<select id='category' name='category' value={category} onChange={selectHandler} >
					{categories.map(categoryOptions)}
				</select>
			</form>
		</div>
	);
};

export default CategoryForm;

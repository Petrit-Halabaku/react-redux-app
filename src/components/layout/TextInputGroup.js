import React from "react";

const TextInputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	onChange
}) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				className="form-control form-control-lg"
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
};

TextInputGroup.defaultProps = {
	type: "text"
};
export default TextInputGroup;

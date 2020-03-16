import React from "react";

function HeaderStyleDropdown(props){
	const onToggle = event => {
		let value = event.target.value;
		props.onToggle(value);
	};

	return (
		<select value={props.active} onChange={onToggle}>
			<option value="">Header Levels</option>
			{props.headerOptions.map((heading, idx) => {
				return <option value={heading.style} key={`${heading.style}-${idx}`}>{heading.label}</option>;
			})}
		</select>
	);
}

export default HeaderStyleDropdown;

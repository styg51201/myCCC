import React from "react";

function BlockStyleButton(props){
    console.log(props)
	const onToggle = e => {
		e.preventDefault();
		props.onToggle(props.style);
	};


    let className = "";
    if (props.active) {
        className += "active";
    }

    return (
        <button className={className} onClick={onToggle}>
            {props.icon || props.label}
        </button>
    );

}

export default BlockStyleButton;

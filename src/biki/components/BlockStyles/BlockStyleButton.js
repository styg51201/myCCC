import React from "react";

function BlockStyleButton(props){
    console.log(props)
	const onToggle = e => {
		e.preventDefault();
		props.onToggle(props.style);
	};


    let className = "RichEditor-styleButton";
    if (props.active) {
        className += " RichEditor-activeButton";
    }

    return (
        <button className={className} onClick={onToggle}>
            {props.icon || props.label}
        </button>
    );

}

export default BlockStyleButton;

import React from "react";
import { EditorState, Editor, RichUtils, AtomicBlockUtils } from "draft-js";
import BlockStyleButton from "./BlockStyleButton";
import HeaderStyleDropdown from "./HeaderStyleDropdown";

import {
    FiBold,
    FiItalic,
    FiUnderline,
    FiAlignCenter,
    FiAlignLeft,
    FiAlignRight
  } from 'react-icons/fi'


export const BLOCK_TYPES = [
	{ label: " “ ” ", style: "blockquote" },
	{ label: "UL", style: "unordered-list-item" },
	{ label: "OL", style: "ordered-list-item" },
    { label: "{ }", style: "code-block" },
    {
        label: "bold",
        style: "BOLD",
        icon: <FiBold />
    },{
        label: "italic",
        style: "ITALIC",
        icon: <FiItalic />
    },{
        label: 'underline',
        style: 'UNDERLINE',
        icon: <FiUnderline />
    },{
        label: 'align-center',
        style: "ALIGNCENTER",
        icon: <FiAlignCenter />
    }
    ,{
        label: 'align-left',
        style: "ALIGNLEFT",
        icon: <FiAlignLeft />
    },{
        label: 'align-right',
        style: "ALIGNRIGHT",
        icon: <FiAlignRight />
    }
];

export const HEADER_TYPES = [
	{ label: "(None)", style: "unstyled" },
	{ label: "H1", style: "header-one" },
	{ label: "H2", style: "header-two" },
	{ label: "H3", style: "header-three" },
	{ label: "H4", style: "header-four" },
	{ label: "H5", style: "header-five" },
	{ label: "H6", style: "header-six" }
];

export function getBlockStyle(block) {
	switch (block.getType()) {
		case "blockquote":
			return "RichEditor-blockquote";
		default:
			return null;
	}
}

//get eidtorState through props
function BlockStyleToolbar(props) {

    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <span className="RichEditor-controls">
            <HeaderStyleDropdown
                headerOptions={HEADER_TYPES}
                active={blockType}
                onToggle={props.onToggle}
            />

            {BLOCK_TYPES.map(type => {
                return (
                    <BlockStyleButton
                        active={type.style === blockType}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                        key={type.label}
                        type={type}
                        icon={type.icon}
                    />
                );
            })}
        </span>
    );

}

export default BlockStyleToolbar;

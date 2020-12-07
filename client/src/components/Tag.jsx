import React from 'react';

const Tag = ({ text, style, index, selected }) => {
	return (
		<div
			style={{
                border: '1px solid black',
				borderRadius: '3px',
				background: selected ? 'black' : 'white',
				color: selected ? 'white' : 'black',
				width: 'fit-content',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0px 8px 4px',
                margin: '5px 3px',
                cursor: 'pointer',
				...style,
			}}
		>
			{text}
		</div>
	);
};

export default Tag;

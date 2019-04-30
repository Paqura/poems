import React from 'react';
import {Field} from 'redux-form';

export type TField = {
	autoFocus?: boolean,
	label?: string,
	component: React.FC<any> | string,
	name: string,
	placeholder?: string,
	type: string,
	required?: boolean,
};

const
	InputField: React.FC<TField> = (props: TField) => (
		<div style={{display: 'flex'}}>
			{props.label && <label
				htmlFor={props.name}
			>{props.label}</label>}

			<Field
				autoFocus={props.autoFocus}
				name={props.name}
				component={props.component}
				type={props.type}
				required={props.required || false}
				placeholder={props.placeholder}
			/>
		</div>
	);

export default InputField;

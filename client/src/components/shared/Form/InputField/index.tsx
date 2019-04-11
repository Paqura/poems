import React from 'react';
import {Field} from 'redux-form';

export type TField = {
	autoFocus?: boolean,
	label?: string,
	component: React.FC<any> | string,
	name: string,
	placeholder?: string,
	type: string,
};

const
	InputField = (props: TField) =>
		<div>
			{props.label && <label
				htmlFor={props.name}
			>{props.label}</label>}

			<Field
				autoFocus={props.autoFocus}
				name={props.name}
				component={props.component}
				type={props.type}
			/>
		</div>;

export default InputField;

import {TAction} from 'src/ducks/typedefs/action';

export type TFormProps = {
	change: (formName: string, fieldName: string, value: string) => void,
	load: Function,
	initialValues: any,
	initialize: (values: any) => void,
	pristine: boolean,
	submitting: boolean,
	handleSubmit: (payload: any) => TAction,
};

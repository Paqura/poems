import {TAction} from 'src/ducks/typedefs/action';

export type TFormProps = {
	pristine: boolean,
	submitting: boolean,
	handleSubmit: (payload: any) => TAction,
};

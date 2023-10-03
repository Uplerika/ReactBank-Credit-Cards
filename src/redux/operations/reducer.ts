import {
	LOAD_OPERATIONS,
	LOAD_OPERATIONS_FAILURE,
	LOAD_OPERATIONS_SUCCESS,
} from './actions';

interface OperationProps {
    title: string;
    date: number;
    amount: number;
    currency: string;
    id?: number;
}

const initialState = [] as OperationProps[];
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_OPERATIONS:
			return null;
		case LOAD_OPERATIONS_FAILURE:
			return null;
		case LOAD_OPERATIONS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
import {
  LOAD_ACCOUNTS,
  LOAD_ACCOUNTS_FAILURE,
  LOAD_ACCOUNTS_SUCCESS,
  CHANGE_ACCOUNT_TITLE,
  ADD_ACCOUNT,
  REMOVE_EXTERNAL_ACCOUNT,
} from "./actions";

interface AccountProps {
    id:number;
    type: string;
    amount?: number;
    currency?: string;
    title?: string;
    customTitle?: string;
}
const initialState = [] as AccountProps[];
const accounts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ACCOUNTS:
        return null;
    case LOAD_ACCOUNTS_FAILURE:
        return null;
    case LOAD_ACCOUNTS_SUCCESS:
        return action.payload;
    case CHANGE_ACCOUNT_TITLE:
        return state.map((account) => 
            account.id === action.payload.id ? 
                { ...account, customTitle: action.payload.customTitle }
            
            : account
        );
    case ADD_ACCOUNT:
        return [...state, action.payload];
    case REMOVE_EXTERNAL_ACCOUNT:
        return state.filter((account) =>  !(account.id === action.payload.id && account.type === 'external')
    );
    default:
        return state;
}
};

export default accounts;
import Types from '../widgets/widget';

const iState = [];

export const checkStatus = () => ({
  type: Types.CHECK_STATUS,
});

const categoryReducer = (state = iState, action) => {
  switch (action.type) {
    case Types.CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;

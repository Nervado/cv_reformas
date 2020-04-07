import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  budget: {},
};

export default function budget(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@budgets/NEW_BUDGET_REQUEST': {
        draft.budget = { ...draft.budget };
        draft.loading = true;
        break;
      }
      case '@budgets/NEW_BUDGET_REQUEST_SUCCESS': {
        draft.budget = {};
        draft.loading = false;
        break;
      }
      case '@budgets/NEW_BUDGET_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@budgets/NEW_BUDGET_UPDATE': {
        draft.budget = { ...draft.budget, ...action.payload.budget };
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

/**
  draft.budget = Object.keys(draft.budget).forEach((key, i) => {
          if (key === Object.keys(action.payload.budget)[i])
            draft.budget[key] = action.payload.budget[key];
        });
 */

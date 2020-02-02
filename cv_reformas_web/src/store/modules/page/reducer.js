import produce from 'immer';

const INITIAL_STATE = {
  mode: true,
};

export default function page(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@page/SET_PAGE_REQUEST': {
        draft.mode = action.payload.status;

        break;
      }

      default:
    }
  });
}

import { store } from '../../store/index';

export function getValues(state, obj) {
  const data = store.getState()[state][obj];
  // const data = store.getState().budgets.budget;

  const values = [];
  Object.keys(data).forEach(k => {
    const o = {};
    o[k] = data[k];
    test.push(o);
  });

  return values;
}

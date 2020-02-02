export function setPageModeRequest(status) {
  return {
    type: '@page/SET_PAGE_REQUEST',
    payload: { status },
  };
}

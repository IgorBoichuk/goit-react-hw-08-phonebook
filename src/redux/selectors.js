export const selectAllContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectFilter = state => state.filter;
export const selectLogin = state => state.user.loggedIn;
export const selectUser = state => state.user.user;

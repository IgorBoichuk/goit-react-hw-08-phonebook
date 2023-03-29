export const selectAllContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
export const selectLogin = state => state.user.loggedIn;
export const selectUser = state => state.user.user;

export const selectfilteredData = state => {
  const contacts = selectAllContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

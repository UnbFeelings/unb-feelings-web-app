import initialState from '../redux/initial-state';

const getStoreKey = (key) => `UNB_FEELINGS_${key}`;

export const setUserStore = (userData = initialState.user.data) => {
  window.localStorage.setItem(getStoreKey("user"), JSON.stringify(userData));
}

export const getStoredUser = () => {
  const data = window.localStorage.getItem(getStoreKey("user"));

  const userData = JSON.parse(data);
  if (userData === null) {
    return initialState.user.data;
  } else {
    return userData;
  }
}

import axios from '../configs/axios';

export const setAvatarURL = (name) => {
  // Red, Green and Blue
  const COLORS = ['700', '070', '007'];
  const avatarName = encodeURIComponent(name);
  const ramdomIndex = Math.floor(Math.random() * 3);
  const BASE_URL = 'https://ui-avatars.com/api/';
  const url = `${BASE_URL}?name=${avatarName}&color=fff&background=${COLORS[ramdomIndex]}`;
  return url;
};

export const fetchUserRandomInfo = async () => {
  // fetching anonymous name and avatar for an user
  try {
    const response = await axios.get('/anonymous-name/');
    const name = response.data.anonymous_name;
    const avatarURL = setAvatarURL(name);
    return new Promise(resolve => resolve(avatarURL));
  } catch (e) {
    return new Promise(reject => reject(e));
  }
};

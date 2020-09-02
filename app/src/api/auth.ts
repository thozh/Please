import api from './client';

const login = (email: string, password: string) => {
  return api.post('/auth/login', {email, password});
};

export default {login};

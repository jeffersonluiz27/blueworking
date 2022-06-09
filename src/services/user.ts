import api from './api';

export const user = {
	auth: (email: string) => api.post('/sessions', { email }),
};

import api from './api';

export const spot = {
	create: (data: FormData, user_id: string) =>
		api.post('/spots', data, {
			headers: { user_id },
		}),
};

import { fetchUtils } from 'react-admin';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const httpClient = fetchUtils.fetchJson;

const deleteDataProvider = {
    delete: async (resource: string, params: any) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        });
        return { data: json };
    },

    deleteMany: async (resource: string, params: any) => {
        const responses = await Promise.all(
            params.ids.map((id: any) =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'DELETE',
                })
            )
        );
        return { data: responses.map(({ json }) => json.id) };
    },
}

export default deleteDataProvider;
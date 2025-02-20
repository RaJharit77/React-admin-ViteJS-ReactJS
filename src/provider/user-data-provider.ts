import { stringify } from 'query-string';
import { fetchUtils } from 'react-admin';

const apiUrl = 'https://jsonplaceholder.typicode.com';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: async (resource: string, params: any) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage,
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        const { json } = await httpClient(url);
        return {
            data: json.map((resource: any) => ({ ...resource, id: resource.id })),
            total: 10,
        };
    },

    getOne: async (resource: string, params: any) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
        return { data: { ...json, id: json.id } };
    },

}

export default dataProvider;
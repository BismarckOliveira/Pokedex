import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.';

interface IRequest {
    endpoint: string;
    data: unknown;
}

interface AddCacheProps {
    payload: {
        endpoint: string;
        data: unknown;
    };
}


const initialState = JSON.parse(localStorage.getItem('@Pokemons') || '[]') as IRequest[];

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        addCache: (state, action: AddCacheProps) => {
            const { endpoint, data } = action.payload;

            const existent = state.find(s => s.endpoint === endpoint)

            const newItem = { endpoint, data }

            if (!existent) {
                const newCache = [...state, newItem]

                localStorage.setItem('@Pokemons', JSON.stringify(newCache))

                state.push(newItem);
            } else {
                const index = state.indexOf(existent);

                state.splice(index, 1, newItem);

                localStorage.setItem('@Pokemons', JSON.stringify(state))
            }

        },
        removeCache: (state, action) => {
            const { endpoint } = action.payload;

            const existent = state.find(i => i.endpoint === endpoint);
            if (existent) {
                const newCache = state.filter(i => i.endpoint !== endpoint);

                localStorage.setItem('@Pokemons', JSON.stringify(newCache));

                state = newCache
            }
        },
    }
})

export const { addCache, removeCache } = requestSlice.actions

export const getData = (endpoint: string) => (state: RootState) => {
    if (!state) return null;

    const { request } = state;

    if (!request) return null;

    const result = request.find(i => i.endpoint === endpoint);

    if (!result) return null;

    return result.data;
};

export const getCache = () => (state: RootState) => state.request;

export default requestSlice.reducer;


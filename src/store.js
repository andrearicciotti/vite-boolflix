import { reactive } from 'vue';

export const store = reactive({
    films: [],
    tvSeries: [],
    searchText: '',
    filmPath: 'https://api.themoviedb.org/3/search/movie',
    tvSeriesPath: 'https://api.themoviedb.org/3/search/tv',
    params: {
        api_key: '915721a449f9cf54e3bf0466ef206579',
        query: '',
    },
    loading: false,
})
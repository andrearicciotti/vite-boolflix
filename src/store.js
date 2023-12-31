import { reactive } from 'vue';

export const store = reactive({
    films: [],
    tvSeries: [],
    searchText: '',
    baseUrl: 'https://api.themoviedb.org/3',
    filmPath: '/search/movie',
    tvSeriesPath: '/search/tv',
    params: {
        api_key: '915721a449f9cf54e3bf0466ef206579',
        query: '',
    },
    baseImgUrl: 'https://image.tmdb.org/t/p/',
    loading: false,
    activeFilm: 0,
    activeTv: 0,
    cardFocus: false,
})
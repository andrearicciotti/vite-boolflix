import { reactive } from 'vue';

export const store = reactive({
    films: [],
    tvSeries: [],
    curText: '',
    searchText: '',
    filmPath: 'https://api.themoviedb.org/3/search/movie?api_key=915721a449f9cf54e3bf0466ef206579',
    tvSeriesPath: 'https://api.themoviedb.org/3/search/tv?api_key=915721a449f9cf54e3bf0466ef206579',
    loading: false,
})
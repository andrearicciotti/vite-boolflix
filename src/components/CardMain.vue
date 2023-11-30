<script>
import { store } from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        film: Object,
    },
    methods: {
        handleFlags(language) {
            language === 'en' ? language = 'GB' : language;
            const lang = language.toUpperCase()
            const flagsBaseUrl = 'https://flagsapi.com/';
            const flagsSizeUrl = '/shiny/64.png';
            let flagUrl = flagsBaseUrl + lang + flagsSizeUrl;
            console.log(flagUrl);
            return flagUrl;
        }, 
    }
}
</script>

<template>
    <h2>{{ film.title }}</h2>
    <h3>{{ film.original_title }}</h3>
    <img v-if="handleFlags" :src="handleFlags(film.original_language)" :alt="`Language: ${film.original_language}`">
    <p>{{ film.vote_average }}</p>
</template>

<style lang="scss" scoped></style>
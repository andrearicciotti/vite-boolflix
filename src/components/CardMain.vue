<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    props: {
        media: Object,
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
    <h3 v-if="media.title">Titolo: {{ media.title }}</h3>
    <h3 v-else-if="media.name">Titolo: {{ media.name }}</h3>
    <h4 v-if="media.original_title">Titolo originale: {{ media.original_title }}</h4>
    <h4 v-else-if="media.original_name">Titolo originale: {{ media.original_name }}</h4>
    <img v-if="handleFlags" :src="handleFlags(media.original_language)" :alt="`Language: ${media.original_language}`">
    <p>Media voti: {{ media.vote_average }}</p>
</template>

<style lang="scss" scoped></style>
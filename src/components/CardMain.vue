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
            // console.log(flagUrl);
            return flagUrl;
        }, 
        handleImgPath(backdropPath) {
            return this.store.baseImgUrl + 'w342' + backdropPath;
        },
        handleVote(voteAverage) {
            voteAverage.ceil()
        }
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
    <img :src="handleImgPath(media.backdrop_path)" alt="">
    <div class="vote-average">
        <i v-if="Math.ceil(media.vote_average) >= 2" class="fa-solid fa-star"></i>
        <i v-else-if="Math.ceil(media.vote_average) >= 1" class="fa-solid fa-star-half-stroke"></i>
        <i v-else class="fa-regular fa-star"></i>
        
        <i v-if="Math.ceil(media.vote_average) >= 4" class="fa-solid fa-star"></i>
        <i v-else-if="Math.ceil(media.vote_average) >= 3" class="fa-solid fa-star-half-stroke"></i>
        <i v-else class="fa-regular fa-star"></i>
        
        <i v-if="Math.ceil(media.vote_average) >= 6" class="fa-solid fa-star"></i>
        <i v-else-if="Math.ceil(media.vote_average) >= 5" class="fa-solid fa-star-half-stroke"></i>
        <i v-else class="fa-regular fa-star"></i>
        
        <i v-if="Math.ceil(media.vote_average) >= 8" class="fa-solid fa-star"></i>
        <i v-else-if="Math.ceil(media.vote_average) >= 7" class="fa-solid fa-star-half-stroke"></i>
        <i v-else class="fa-regular fa-star"></i>
        
        <i v-if="Math.ceil(media.vote_average) >= 10" class="fa-solid fa-star"></i>
        <i v-else-if="Math.ceil(media.vote_average) >= 9" class="fa-solid fa-star-half-stroke"></i>
        <i v-else class="fa-regular fa-star"></i>
    </div>
</template>

<style lang="scss" scoped></style>
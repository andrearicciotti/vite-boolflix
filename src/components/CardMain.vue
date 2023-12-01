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
        handleImgPath(imageUrl) {
            return this.store.baseImgUrl + 'w92' + imageUrl;
        },
        handlePosterPath(posterPath) {
            return this.store.baseImgUrl + 'w342' + posterPath;
        },
        handleOverview(overview) {
            console.log(overview, overview.length);
            let newString =  overview.substring(0,140);
            return newString += '...';
        }
    }
}
</script>

<template>
    <div class="poster">

        <img :src="handlePosterPath(media.poster_path)" :alt="media.title ? media.title : media.original_name">

    </div>
    <div class="info">

        <h3 v-if="media.title"><strong></strong>{{ media.title }}</h3>

        <h3 v-else-if="media.name"><strong>Titolo : </strong>{{ media.name }}</h3>

        <h4 v-if="media.original_title"><strong>Titolo originale : </strong>{{ media.original_title }}</h4>

        <h4 v-else-if="media.original_name"><strong>Titolo originale : </strong>{{ media.original_name }}</h4>

        <img v-if="handleFlags" :src="handleFlags(media.original_language)" :alt="`Language: ${media.original_language}`">

        <p v-if="media.overview" class="caption"><strong>Descrizione : </strong>{{ handleOverview(media.overview) }}</p>

        <img class="backdrop-img" :src="handleImgPath(media.backdrop_path)" :alt="media.title ? media.title : media.original_name">

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

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.poster {
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;

    img {
        display: block;
    }
    
    &:hover {
        display: none;
    }
}


.info {
    height: 100%;
    width: 100%;
    padding: .5rem;
    display: block;
    position: absolute;
    @include flex (column, start, center);
    gap: .5rem;

    .backdrop-img {
        margin-top: auto;
    }

    &:hover {
        z-index: 2;
        background-color: rgba($color: #000000, $alpha: 0.7);
    }

    .caption {
        display: inline-block;
        max-height: 30px;
        font-size: .7rem;
    }

    h4 {
        font-size: .9rem;
    }

}
</style>
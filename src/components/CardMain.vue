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
            language === 'ja' ? language = 'JP' : language;
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
            // console.log(overview, overview.length);
            let newString = overview.substring(0, 140);
            return newString += '...';
        },
        handleTitle(title) {
            let newString = title;
            if (newString.length > 20) {
                newString = title.substring(0, 25);
                return newString += '...';
            }
            return newString;
        },

    }
}
</script>

<template>
    <div v-if="store.cardFocus" class="card-focus">
        <div class="info">

            <h2 v-if="media.title">Titolo : </h2>
            <h3 v-if="media.title">{{ media.title }}</h3>

            <h2 v-else-if="media.name">Titolo :</h2>
            <h3 v-else-if="media.name">{{ media.name }}</h3>

            <h3 v-if="media.original_title">Titolo originale : </h3>
            <h4 v-if="media.original_title">{{ media.original_title }}</h4>

            <h3 v-else-if="media.original_name">Titolo originale : </h3>
            <h4 v-else-if="media.original_name">{{ media.original_name }}
            </h4>

            <img class="flag" v-if="media.original_language" :src="handleFlags(media.original_language)"
                :alt="`Language: ${media.original_language}`">

            <p v-if="media.overview" class="caption"><strong>Descrizione : </strong>{{ media.overview }}</p>

            <img v-if="media.backdrop_path" class="backdrop-img" :src="handleImgPath(media.backdrop_path)"
                :alt="media.title ? media.title : media.original_name">

            <h3>{{ media.vote_average }}</h3>
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
    </div>
    <div v-else class="poster-info">

        <div v-if="media.poster_path" class="poster">

            <img :src="handlePosterPath(media.poster_path)" :alt="media.title ? media.title : media.original_name">

        </div>
        <div class="info">

            <h3 v-if="media.title">{{ handleTitle(media.title) }}</h3>

            <h3 v-else-if="media.name">{{ handleTitle(media.name) }}</h3>

            <h4 v-if="media.original_title"><strong>Titolo originale : </strong>{{ handleTitle(media.original_title) }}</h4>

            <h4 v-else-if="media.original_name"><strong>Titolo originale : </strong>{{ handleTitle(media.original_name) }}
            </h4>

            <img class="flag" v-if="media.original_language" :src="handleFlags(media.original_language)"
                :alt="`Lang: ${media.original_language}`">

            <p v-if="media.overview" class="caption"><strong>Descrizione : </strong>{{ handleOverview(media.overview) }}</p>

            <img v-if="media.backdrop_path" class="backdrop-img" :src="handleImgPath(media.backdrop_path)"
                :alt="media.title ? media.title : media.original_name">

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

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

.card-focus {
    position: absolute;

    .info {
        height: 100%;
    width: 100%;
    }
}

.poster-info {
    height: 100%;
    width: 100%;

    .poster {
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        z-index: 1;

        img {
            display: block;
            max-width: 233px;
            min-height: 350px;
        }

        &:hover {
            display: none;
        }
    }


    .info {
        height: 100%;
        min-width: 233px;
        width: 100%;
        padding: .5rem;
        display: block;
        position: absolute;
        @include flex (column, start, center);
        gap: .5rem;

        .backdrop-img {
            margin: auto 0 0 0;
        }

        .vote-average {
            margin-top: auto;
        }

        &:hover {
            z-index: 2;
            background-color: rgba($color: $orange-color, $alpha: 0.8);
        }

        .caption {
            display: inline-block;
            max-height: 30px;
            font-size: .7rem;
        }

        h4 {
            font-size: .9rem;
        }

        .flag {
            width: 48px;
            aspect-ratio: 1;
        }
    }

}
</style>
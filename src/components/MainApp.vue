<script>
import { store } from '../store';
import CardMain from './CardMain.vue';

export default {

    components: {
        CardMain,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        handleScrollFilm(direction) {
            let doc = document.querySelector(".scroller-film");
            console.log(doc.scrollLeft);
            if (direction === 'right') {
                doc.scrollLeft += 880
            } else {
                doc.scrollLeft -= 880
            }
        },
        handleScrollTv(direction) {
            let doc = document.querySelector(".scroller-tv");
            console.log(doc.scrollLeft);
            if (direction === 'right') {
                doc.scrollLeft += 880
            } else {
                doc.scrollLeft -= 880
            }
        },
        handleTv(index) {
            this.store.activeTv = index
            console.log(this.store.activeTv);
            this.store.activeFilm = 1000;
            this.handleCardPreview()
        },
        handleFilm(index) {
            this.store.activeFilm = index
            console.log(this.store.activeFilm);
            this.store.activeTv = 1000;
            this.handleCardPreview()
        },
        handleCardPreview() {
            this.store.cardFocus = true;
        }
    }
}
</script>

<template>
    <main>
        <div v-if="store.cardFocus === false" class="normal-state">

            <div v-if="store.films.length >= 1 && store.tvSeries.length >= 1" class="search-done">

                <section class="films">
                    <h2>film</h2>
                    <ul class="scroller-film">
                        <li v-for="film, index in store.films" @click.stop="handleFilm(index)">
                            <CardMain :media="film" />
                        </li>
                    </ul>
                    <div @click.stop="handleScrollFilm()" class="prev"><i class="fa-solid fa-square-caret-left"></i></div>
                    <div @click.stop="handleScrollFilm('right')" class="next"><i class="fa-solid fa-square-caret-right"></i>
                    </div>
                </section>
                <section class="tv-shows">
                    <h2>serie tv</h2>
                    <ul class="scroller-tv">
                        <li v-for="tvShow, index in store.tvSeries" @click.stop="handleTv(index)">
                            <CardMain :media="tvShow" />
                        </li>
                    </ul>
                    <div @click.stop="handleScrollTv()" class="prev"><i class="fa-solid fa-square-caret-left"></i></div>
                    <div @click.stop="handleScrollTv('right')" class="next"><i class="fa-solid fa-square-caret-right"></i>
                    </div>
                </section>

            </div>

            <div v-else class="waiting-search">

            </div>

        </div>

        <div v-else class="card-preview">

            <CardMain v-if="store.activeTv === 1000" :media="store.films[store.activeFilm]"/>
            <CardMain v-else :media="store.tvSeries[store.activeTv]"/>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

main {
    width: 880px;
    margin: 0 auto;
    font-family: 'Jura Variable', sans-serif;
    font-weight: 300;
    text-align: center;

    section {
        width: 880px;
        position: relative;

        .prev {
            width: 25px;
            height: 25px;
            font-size: 3rem;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -5%;
            transform: translateX(-50%);
        }

        .next {
            width: 25px;
            height: 25px;
            font-size: 3rem;
            cursor: pointer;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -6%;
            transform: translateX(-50%);
        }

        i {
            color: $orange-color;
        }

        h2 {
            font-weight: bold;
            font-size: 2.4rem;
            text-transform: uppercase;
            border-bottom: 2px solid $orange-color;
            margin-bottom: 1rem
        }

        ul {
            @include flex (row, start, start);
            overflow-x: auto;
            height: 350px;
            width: 100%;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                list-style-type: none;
                flex-shrink: 0;
                flex-wrap: wrap;
                width: 220px;
                height: 100%;
                position: relative;
                cursor: pointer;
            }
        }
    }

    .films {
        margin: 1.5rem 0;
    }

}

.card-preview {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>

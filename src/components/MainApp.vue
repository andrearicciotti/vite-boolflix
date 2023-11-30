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

    }
}
</script>

<template>
    <main>
        <section class="films">
            <h2>Lista film</h2>
            <ul>
                <li v-for="film in store.films">
                    <CardMain :media="film" />
                </li>
            </ul>
        </section>
        <section class="tv-shows">
            <h2>Lista serie tv</h2>
            <ul>
                <li v-for="tvShow in store.tvSeries">
                    <CardMain :media="tvShow" />
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

main {
    width: 70%;
    margin: 0 auto;
    font-family: 'Jura Variable', sans-serif;
    font-weight: 300;
    text-align: center;

    section {
        width: 100%;

        h2 {
            font-weight: bold;
            font-size: 2.4rem;
            text-transform: uppercase;
            border-bottom: 2px solid $orange-color;
        }

        ul {
            margin: 2.5rem 0;
            @include flex (row, start, start);
            overflow-x: auto;
            height: 350px;
            width: 100%;

            li {
                list-style-type: none;
                flex-shrink: 0;
                @include flex (column, start, center);
                flex-wrap: wrap;
                width: 220px;
                height: 100%;
                position: relative;
            }
        }
    }

    .films {
        h2 {
            margin: 10rem 0 0 0;
        }
    }
}
</style>

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
            <ul>
                <h2>lista film</h2>
                <li v-for="film in store.films">
                    <CardMain :media="film" />
                </li>
            </ul>
        </section>
        <section class="tv-shows">
            <ul>
                <h2>lista serie tv</h2>
                <li v-for="tvShow in store.tvSeries">
                    <CardMain :media="tvShow" />
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss" scoped>
ul {
    margin: 2.5rem 0;
    border: 1px solid black;

    h2 {
        font-weight: bold;
        margin: 2.5rem 0;
        text-transform: uppercase;
    }
}
</style>

<script>
import { store } from '../store';

export default {

    components: {

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
                <h3>lista film</h3>
                <li v-for="film in store.films">
                    {{ film.original_title }} <br>
                    {{ film.original_language }} <br>
                    {{ film.overview }}
                </li>
            </ul>
        </section>
        <section class="tv-shows">
            <ul>
                <h3>lista serie tv</h3>
                <li></li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss" scoped></style>

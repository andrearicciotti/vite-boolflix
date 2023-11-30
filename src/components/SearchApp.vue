<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    emits: ['searchTyped']
}
</script>

<template>
    <header>
        <nav>
            <div class="logo">
                <h1>Boolflix</h1>
            </div>
            <div class="searchbar">

                <label for="search">Find a film or TV Show :</label>
                <input placeholder="" type="search" id="search" v-model.trim="store.searchText">
                <button @click="$emit('searchTyped')">Search</button>

            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
@use '../style/partials/mixins' as *;

header {
    background-color: $orange-color;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;

    nav {
        width: 70%;
        margin: 0 auto;
        @include flex (row, space-between, center);
        height: $header-heigth;
        font-size: 1.2rem;

        h1 {
            font-size: 3rem;
        }

        .searchbar {
            flex-grow: 1;
            text-align: right;
            
            input {
                width: 40%;
                padding: .4rem;
                background-color: white;
                border: none;
                margin: 0 1rem;
                border-radius: 5px;
                font-family: inherit;
                font-weight: bold;
                font-size: inherit;
    
                &:focus-visible {
                    outline: 2px solid $aqua-color;
                }
            }
    
            button {
                padding: .4rem .5rem;
                border: none;
                border-radius: 5px;
                background-color: white;
                color: $orange-color;
                font-family: inherit;
                font-weight: bold;
                cursor: pointer;
                font-size: inherit;
            }
        }
    }
}
</style>

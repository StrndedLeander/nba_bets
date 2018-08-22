<template>
<v-app id="app">
    <Navbar/>
    <router-view/>
</v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
    name: "App",
    components: {
        Navbar
    }
};
</script>

<style>
#app {
    padding: 0;
    margin: 0;
}
</style>

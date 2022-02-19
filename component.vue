<template>
    <h1>{{ mensaje }}</h1>
</template>

<script>
export default {
    data() {
        return {
            mensaje: "Hola a todos",
        };
    },
};
</script>

<style scoped>
h1 {
    color: bisque;
    font-style: italic;
}
</style>

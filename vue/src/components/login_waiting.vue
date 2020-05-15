<template>
    <div>
        <!-- img -->
        <h1>Don't close this tab!</h1>
        <h2>Confirm your email!</h2>
        <p>We emailed a magic link to </p>
        <p class="thick">{{email}}</p>
    </div>
</template>

<script>
export default {
    name: "waiting",
    props: ['email']
}
</script>

<style scoped>
p.thick {
    font-weight: bold;
}

</style>
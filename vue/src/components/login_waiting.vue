<template>
    <div>
        <!-- img -->
        <h1>Confirm your email!</h1>
        <p>We emailed a magic link to </p>
        <p class="thick">{{email}}</p>
        <p> Click the link to log in or sign up</p>
        <h1>Don't close this tab</h1>
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
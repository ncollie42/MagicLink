<template>
    <div>
    <img src="http://placekitten.com/200/300">
    <h1>Logging you in...</h1>    
    </div>
</template>

<script>
export default {
    name: 'waiting',
    created: function() {
        console.log("I am created NOW")
    },
}
</script>
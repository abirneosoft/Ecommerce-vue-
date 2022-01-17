<template>
<h2>you are successfully logout</h2>  
</template>

<script>
 

export default {
    name:"Logout",
    mounted(){
        localStorage.clear();

    }
}
</script>

<style>

</style>
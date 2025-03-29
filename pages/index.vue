<template>    
    <NuxtLayout name="layout-pokedex">
       <div class="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full flex justify-start items-start gap-3 flex-wrap">
            <Pokemon v-for="(pokemon, index) in pokemons" :pokemon :index></Pokemon>

       </div> 
       <Dialog/>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import Dialog from '~/components/Dialog.vue';
    const store = usePokedex(); 
    const { pokemons } = storeToRefs(store);
    const { getPokemons} = store; 

    onMounted(() => {
        getPokemons(); 
    })

</script>
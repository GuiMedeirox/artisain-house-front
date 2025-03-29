<template>
    <div class="min:w-[200px] max:w-[250px] flex-1 border border muted shadow-md rounded-md flex flex-col items-start p-2 gap-2"> 
        
        <div class="w-full h-[150px] flex justify-center items-center overflow-hidden rounded-md">
            <img :src="pokemon.sprites.other.showdown.front_default" class="w-full h-full object-contain">

        </div>
        <h2 class="text-medium font-md text-black mt-3"> {{ pokemon?.name }} </h2>
        <div class="text-zinc-400 text-sm font-normal mt-2">
            Tipo: 
        </div>
        <div class="w-full flex justify-start items-start gap-2 flex-wrap">
            <div class="flex justify-center items-center rounded-sm border border-zinc-300 px-3 shadow-sm text-sm" v-for=" type in pokemon.types ">
                {{ type.type.name }}
            </div>
        </div>
        
    

        <p class="text-zinc-400 text-sm font-normal mt-2"> Número: {{ index + 1 }} </p>
        <Button variant="outline" class="w-full text-sm font-normal" @click="store.getPokemonById(index+1)"> Visualizar Pokemon</Button>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({ 
        pokemon: { required: true, type: Object }, 
        index: { required: true, type:Number}
    })
    const store = usePokedex(); 
    const pokemonDetails = ref(null);
</script>


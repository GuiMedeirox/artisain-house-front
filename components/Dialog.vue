<template>
    <Dialog v-model:open="dialogState">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>{{ pokemon.name + " description" }} </DialogTitle>
                <DialogDescription>
                    <div>
                        <b>Altura: </b> {{ pokemon.height }} unidades de altura
                    </div>
                    <div>
                        <b>Peso: </b>{{ pokemon.weight }} kg
                    </div>
                    <div class="text-zinc-400 text-sm font-normal mt-2">
                        Habilidades: 
                    </div>
                    <div class="w-full flex justify-start items-start gap-2 flex-wrap">
                        <div class="flex justify-center items-center rounded-sm border border-zinc-300 px-3 shadow-sm text-sm" v-for=" abi in pokemon.abilities ">
                            {{ abi.ability.name }}
                        </div>
                    </div>
                </DialogDescription>
            </DialogHeader>
            <div v-if="pokemon.name" class="grid gap-4 py-4">
                <div class="flex flex-col items-start w-full gap-4">
                    <div class="w-full h-[150px] flex justify-center items-center overflow-hidden rounded-md">
                        <img :src="pokemon.sprites.other.showdown.front_default" class="w-full h-full object-contain">
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
    const store = usePokedex();
    const {dialogState, pokemon} = storeToRefs(store); 
</script>
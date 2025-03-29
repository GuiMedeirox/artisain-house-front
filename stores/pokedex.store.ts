import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export const usePokedex = defineStore('pokedex', {
    state () { 
        return { 
            pokemons: [] as any,
            pokemon: {} as any, 
            dialogState: false, 
            pokemonId: 0,
        } 
    },
    actions: {

        changeDialogState(state: boolean){
            this.dialogState = false;
            if(!state){
                this.pokemon = {};
            }
        },

        async getPokemonById (id: number){
            this.pokemon = {}; 
            const response = await onFetch(`pokemon/${id}`, { method: "GET"}); 
            this.pokemon = response;
            this.dialogState = true; 
        },

        async getPokemons() { 
            this.pokemons = []; 
            const response = await onFetch('pokemon?limit=30', { method: "GET"}); 
            
            for await (const item of response.results) { // 'item' agora é um objeto
                const details: any = await onFetch(`pokemon/${item.name}`, { method: "GET"});
                this.pokemons.push(details);
            }
            
            console.log(this.pokemons); 

        }
        
    }, 
    
})
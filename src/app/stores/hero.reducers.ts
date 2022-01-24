import { createReducer, on } from "@ngrx/store";
import { storeColor } from './hero.actions';

export const initialState: any[] = [];

export const colorReducer = createReducer(
    initialState,
    on(storeColor, (state, {heroe}) => { 
        
        let retorno = state.find(v => v.id === heroe[0].id);

        if(retorno){
            const nstate = state.filter(v => v.id !== heroe[0].id);
            const aux = {id:retorno.id,color:heroe[0].color};
            return [...nstate,aux];
        }

       return [...state,...heroe] 
    })
);

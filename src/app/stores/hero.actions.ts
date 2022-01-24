import { createAction, props } from '@ngrx/store';


export const storeColor = createAction(
    'storeColor',
    props<{
        heroe:{
            id:number,
            color:string
        }[]
    }>()
  );
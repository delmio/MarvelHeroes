import { Hero } from '../models/hero';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as heroReducer from './hero.reducers';

export interface HeroState {
    hero : Hero[]
}

// export const getHeroColorState = createFeatureSelector<HeroState>('_heroEntries');

export const getHeroColorState = (state: HeroState) => state.hero;

export const getHeroColor = createSelector(
    getHeroColorState,
    (hero : Hero[]) =>{
        hero
    }
);
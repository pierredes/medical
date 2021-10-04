import { Action } from "@ngrx/store";
import { Ville } from "../classes/ville";
import { villeAction, VillesActionsTypes } from "./villes.actions";

export enum VilleStateEnum {
    INITIAL = "initial",
    LOADING = 'loading',
    LOADED = "loaded",
    ERROR = "error"
}

export interface VilleState {
    villes : Array<Ville>,
    errorMessage : string,
    dataState : VilleStateEnum
}

const initState : VilleState = {
    villes : [],
    errorMessage : "",
    dataState: VilleStateEnum.INITIAL
}

export function VilleReducer(state = initState, action : Action): VilleState {
    switch(action.type) {
        case(VillesActionsTypes.GET_ALL_VILLE) :
            return { ...state, dataState : VilleStateEnum.LOADING}
        case(VillesActionsTypes.GET_ALL_VILLE_SUCCESS) :
            return { ...state, dataState : VilleStateEnum.LOADED, villes : (<villeAction>action).payload }
        case(VillesActionsTypes.GET_ALL_VILLE_ERROR) :
            return { ...state, dataState : VilleStateEnum.ERROR, errorMessage : (<villeAction>action).payload }
    }
    return { ...state }
}
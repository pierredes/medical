import { Action } from "@ngrx/store";
import { Ville } from "../classes/ville";

export enum VillesActionsTypes {
    GET_ALL_VILLE = "[villes] Get all ville",
    GET_ALL_VILLE_SUCCESS = "[villes] Get all ville success",
    GET_ALL_VILLE_ERROR = "[villes] Get All Ville Error"
}

export class getAllVilleAction implements Action {
    type : VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLE;
    constructor( public payload : any) {}
}

export class getAllVilleSuccessAction implements Action {
    type : VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLE_SUCCESS;
    constructor( public payload : Ville[]) {}
}

export class getAllVilleErrorAction implements Action {
    type : VillesActionsTypes = VillesActionsTypes.GET_ALL_VILLE_ERROR;
    constructor( public payload : string) {}
}

export type villeAction = getAllVilleAction | getAllVilleSuccessAction | getAllVilleErrorAction;
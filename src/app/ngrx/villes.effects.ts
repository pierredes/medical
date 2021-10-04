import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import {catchError, map, mergeMap} from 'rxjs/operators';
import { VilleService } from "../service/ville.service";
import { getAllVilleErrorAction, getAllVilleSuccessAction, VillesActionsTypes } from "./villes.actions";

@Injectable()
export class VilleEffects {
    constructor(private effectsAction : Actions, private vs : VilleService) {}

    getAllVillesEfects : Observable<Action> = createEffect(
        () => this.effectsAction.pipe(
            ofType(VillesActionsTypes.GET_ALL_VILLE),
            mergeMap ((action) => {
                return this.vs.GetAllVille().pipe(
                    map( (villes) => new getAllVilleSuccessAction(villes)),
                    catchError( (error) => of(new getAllVilleErrorAction(error.message)))
                )
            })
        )
    )
}
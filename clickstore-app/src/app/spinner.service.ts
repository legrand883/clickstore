import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public activo: boolean = false;
  constructor() { }
}

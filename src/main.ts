// main.ts
import { bootstrapApplication } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productoReducer } from './app/store/producto.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { ProductoService } from './app/services/producto.service';
import { ProductoEffects } from './app/store/producto.effects';

import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ProductoService,
    provideStore(),
    provideState({ name: "productos", reducer: productoReducer }),
    provideEffects([ProductoEffects]),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      }
    }),
    isDevMode() ? provideStoreDevtools() : [],
  ]
}).catch(err => console.error(err));
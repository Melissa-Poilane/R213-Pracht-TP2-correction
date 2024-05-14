/**
 * Générer ce fichier avec la commande suivante:
 * npm run typegen
 */

import type PocketBase from 'pocketbase'
// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {}
export interface MaisonRecord {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    image: string;
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number;
    surface: number;
    updated: string;
  }
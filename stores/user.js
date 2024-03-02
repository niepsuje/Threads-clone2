import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        posts: [],
        isMenuOverlay: false,
        isLogoutOverlay: false,
    }),
})






// user.js
// -> komponent przechowuje informacje o użytkowniku
// -> przechowuje posty
// -> flagi informujące czy nakładka menu i nakładka logout jest widoczna

// Importuje funkcję defineStore z biblioteki vue-typed-store, która służy do definiowania Vuex store zgodnie z Composition API.
// useUserStore: Jest to nazwa zmiennej, która przechowuje instancję stworzonego magazynu. Współczesne konwencje używają przedrostka use dla funkcji Vue Composition API.
// defineStore("user", { ... }): Wywołuje funkcję defineStore i definiuje magazyn o nazwie "user". Pierwszym argumentem jest nazwa magazynu, a drugim argumentem jest obiekt zawierający definicję stanu, akcji itp.

// state: Jest to funkcja fabrykująca, która zwraca początkowy stan magazynu.
// posts: Jest to tablica, która przechowuje posty użytkownika (lub inne informacje).
// isMenuOverlay: Jest to flaga mówiąca, czy overlay (nakładka) menu jest widoczna czy nie.
// isLogoutOvelay: Jest to flaga mówiąca, czy overlay wylogowywania jest widoczna czy nie.


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uri: 'http://localhost:3000',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZGltaXRyaWplc2tpZiIsImEiOiJja21kZ21hdHEyNjQ0MndsYWhsYTEyanNpIn0.NjKWQUYg5cXFdk-dDMVuzw'
  },
  firebase: {
    apiKey: "AIzaSyCjXpOesJRByR51Fcl1-EzsznRG7SA3Aik",
    authDomain: "mkbike-135bf.firebaseapp.com",
    databaseURL: "https://mkbike-135bf-default-rtdb.firebaseio.com",
    projectId: "mkbike-135bf",
    storageBucket: "mkbike-135bf.appspot.com",
    messagingSenderId: "580385332577",
    appId: "1:580385332577:web:1192d2b6fc4fe803c67920"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

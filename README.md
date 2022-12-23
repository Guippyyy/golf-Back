# Examenopdracht Front-end Web Development / Web Services

> Schrap hierboven wat niet past

- Student: Guillaume De Craene
- Studentennummer: 202185375
- E-mailadres: guillaume.decraene@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- ...

> Vul eventueel aan

## Opstarten

> Schrijf hier hoe we de applicatie starten (.env bestanden aanmaken, commando's om uit te voeren...)
> ->npm start

## Testen

> maak een .env.test bestand in de src folder,
> plaats het volgende er in:
> `AUTH_TEST_USER_USER_ID=auth0|6391b763e4e2c1af3fd1264b
AUTH_TEST_USER_USERNAME=tester
AUTH_TEST_USER_PASSWORD=12345abcdE
AUTH_TOKEN_URL=https://dev-8cpbbh21w2gsf8yo.us.auth0.com/oauth/token
AUTH_CLIENT_ID=vJiNOBCQEuCRNoFU7I4tO9ORIBm6l5Eb
AUTH_CLIENT_SECRET=nhmDy5NuKcKGs_Cdn4c_P6y9uy_CviitxrEokJXuJqoHeFHXK47j_0Bf7JF0poRN
AUTH_AUDIENCE=https://golfApp.guillaume.hogent.be`

voer dan het commando uit:

`yarn test:coverage`

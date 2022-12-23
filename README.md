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

> maak een .env.development bestand aan in de src folder
> plaats er het volgende in:

> `NODE_ENV=development`

> `DATABASE_HOST={hostname}`  
> `DATABASE_PORT={port}`  
> `DATABASE_USERNAME={username}`  
> `DATABASE_PASSWORD={password}`  
> `DATABASE_NAME={name}`

voer dan het commando uit:

> `yarn start`

## Testen

maak een .env.test bestand in de src folder,
plaats het volgende er in:

> `NODE_ENV=test`

> `AUTH_TEST_USER_USER_ID={auth userId}`  
> `AUTH_TEST_USER_USERNAME={userName}`  
> `AUTH_TEST_USER_PASSWORD={password}`  
> `AUTH_TOKEN_URL={url token}`  
> `AUTH_CLIENT_ID={clientId}`  
> `AUTH_CLIENT_SECRET={secret}`  
> `AUTH_AUDIENCE={audience}`

> `DATABASE_HOST={hostname}` > `DATABASE_PORT={port}` > `DATABASE_USERNAME={username}` > `DATABASE_PASSWORD={password}` > `DATABASE_NAME={name}`

voer dan het commando uit:

> `yarn test:coverage`

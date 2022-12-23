# Guillaume De Craene (202185375)

- [ ] Front-end Web Development
  - [GitHub repository](https://github.com/Web-IV/2223-frontendweb-Guippyyy)
  - [Online versie](https://two223-frontendweb-guippyyy.onrender.com/)
- [ ] Web Services: GITHUB URL
  - [GitHub repository](https://github.com/Web-IV/2223-webservices-Guippyyy)
  - [Online versie](https://two223-webservices-guippyyy.onrender.com)

**Logingegevens**

- Gebruikersnaam/e-mailadres: tester
- Wachtwoord: 12345abcdE

## Projectbeschrijving

> Het is een platfrom waar je jouw scores kunt bij houden, en je kunt de scores herbekijken.
> ![](/images/mermaid-0.png)

## Screenshots

> 1-9 holes zichtbaar
> ![](/images/Screenshot_20221220_064204.png)
> 1-18 holes zichtbaar
> ![](c/images/Screenshot_20221220_064256.png)
> geef 7 & 6 in en click submit
> ![](images/Screenshot_20221220_064337.png)
> score is +6
> ![](/images/Screenshot_20221220_064407.png)
> score zichtbaar in history
> ![](Screenshot_20221220_064434.png)

## Behaalde minimumvereisten

### Front-end Web Development

- **componenten**

  - [x] heeft meerdere componenten - dom & slim (naast login/register)
  - [x] definieert constanten (variabelen, functies en componenten) buiten de component
  - [x] minstens één form met validatie (naast login/register)
  - [x] login systeem (eigen of extern zoals bv. Auth0)
        <br />

- **routing**

  - [x] heeft minstens 2 pagina's (naast login/register)
  - [x] routes worden afgeschermd met authenticatie en autorisatie
        <br />

- **state-management**

  - [x] meerdere API calls (naast login/register)
  - [x] degelijke foutmeldingen indien API call faalt
  - [x] gebruikt useState enkel voor lokale state
  - [ ] gebruikt Context, useReducer, Redux… voor globale state
        <br />

- **hooks**

  - [x] kent het verschil tussen de hooks (useCallback, useEffect…)
  - [x] gebruikt de hooks op de juiste manier
        <br />

- **varia**
  - [x] een aantal niet-triviale testen (unit en/of e2e en/of ui)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige README.md
  - [x] volledig en tijdig ingediend dossier

### Web Services

- **datalaag**

  - [x] voldoende complex (meer dan één tabel)
  - [x] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [x] heeft migraties
  - [ ] heeft seeds
        <br />

- **repositorylaag**

  - [x] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [x] mapt OO-rijke data naar relationele tabellen en vice versa
        <br />

- **servicelaag met een zekere complexiteit**

  - [x] bevat alle domeinlogica
  - [x] bevat geen SQL-queries of databank-gerelateerde code
        <br />

- **REST-laag**

  - [x] meerdere routes met invoervalidatie
  - [x] degelijke foutboodschappen
  - [x] volgt de conventies van een RESTful API
  - [x] bevat geen domeinlogica
  - [x] degelijke authorisatie/authenticatie op alle routes
        <br />

- **varia**
  - [x] een aantal niet-triviale testen (min. 1 controller >=80% coverage)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige `README.md`
  - [x] maakt gebruik van de laatste ES6-features (object destructuring, spread operator...)
  - [x] volledig en tijdig ingediend dossier

## Projectstructuur

### Front-end Web Development

- page heeft navbar & props.children
- scoreCard -> table -> scorerow
- history -> historyFields -> collapsible -> table -> scorerow

### Web Services

> geen design pattern gebruikt

## Extra technologie

### Front-end Web Development

- een library die ervoor zorgt dat je verschillende grafieken kan genereren.
- chart JS / https://www.npmjs.com/package/chart.js?activeTab=readme

### Web Services

- prisma bestaat uit; the prisma scheme, the prisma data model, the prisma client
  en zorgt ervoor dat je makkelijk een databank kan creeren.
- prisma / https://www.npmjs.com/package/prisma

## Testresultaten

### Front-end Web Development

- kijken of de applicatie draait
- login en check of ik naar /profile kan gaan
- login -> naar / play (forms) -> click submit -> ga na of form validatie werkt

### Web Services

- post een score en verwacht ~ succes
- post een score en verwacht ~ scores is required
- get all scores
- get all locations

![](/images/test.png)

## Gekende bugs

### Front-end Web Development

> neen

### Web Services

> neen

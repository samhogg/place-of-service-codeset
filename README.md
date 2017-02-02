# place-of-service-codeset

Professional claim place of service codes sourced from CMS

## Installing

`npm install place-of-service-codes`

## Usage

```javascript
var placeOfServiceCodeset = require('place-of-service-codeset')

// Codes are accessible by either string or number
var pharmacy = placeOfServiceCodeset('01')
var inpatientHospital = placeOfServiceCodeset(21)

// Codes have three string fields
console.log(pharmacy)
/*
  {
    placeOfServiceCode: '01',
    placeOfServiceName: 'Pharmacy',
    placeOfServiceDescription: 'A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients. (Effective October 1, 2003)'
  }
*/
```

## Rebuilding `codes.json`

Run `npm build` and the script will scrape the [source document](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set.html) and create a fresh json source file.

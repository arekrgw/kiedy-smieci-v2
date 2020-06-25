# KiedyŚmieciAPI

### Endpoints and example responses:
---
**GET** */types*
```json
[
  {
    "_id": "5ef22139ed562b349cc7e8b7",
    "type": "tworzywa sztuczne"
  }
  ...
]
```

**GET** */regions*
```json
[
  {
    "_id": "5ef22c025d04fe023023c6cd",
    "regionName": "Rogów",
    "postalCode": "95-063",
    "hours": "6-15",
    "city": {
        "_id": "5ef22c6d5d04fe023023c6ce",
        "cityName": "Rogów",
        "province": "łódzkie"
      }
  }
  ...
]
```

**GET** */regions/**:id***
```json
{
  "_id": "5ef22c025d04fe023023c6cd",
  "regionName": "Rogów",
  "postalCode": "95-063",
  "hours": "6-15",
  "city": {
      "_id": "5ef22c6d5d04fe023023c6ce",
      "cityName": "Rogów",
      "province": "łódzkie"
    }
  }
```

**GET** */dates/**:id***
```json
[
  {
    "_id": "5ef312ea3eb934496c4ea68e",
    "date": "2020-07-06T00:00:00.000Z",
    "garbageType": {
      "_id": "5ef3083eed4a8be5efe1700f",
      "type": "papier"
    },
    "garbageRegion": {
      "_id": "5ef22c025d04fe023023c6cd",
      "regionName": "Rogów",
      "hours": "6-15",
      "city": "5ef22c6d5d04fe023023c6ce"
    }
  },
  {
    "_id": "5ef312ea3eb934496c4ea692",
    "date": "2020-07-29T00:00:00.000Z",
    "garbageType": {
      "_id": "5ef30861ed4a8be5efe17010",
      "type": "szkło"
    },
    "garbageRegion": {
      "_id": "5ef22c025d04fe023023c6cd",
      "regionName": "Rogów",
      "hours": "6-15",
      "city": "5ef22c6d5d04fe023023c6ce"
    }
  }
  ...
]
```


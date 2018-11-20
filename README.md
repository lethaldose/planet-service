# Planet Service

## Intro

A simple HTTP REST api:
- Provides information about planets

### Environment
- node v10.13
- express
- yarn or npm package manager
- jest for testing

### Schema
- Refer to [swagger](swagger.yaml)

### Routes

| Path                         | Method |
| ---------------------------- | ------ |
| /planets                     | GET    |
| /health-check                | GET    |
| /metrics                     | GET    |

### Project Structure

```
├── src - service source files
|      ├── schemas - schema validators
|      ├── planet - planet routes
├── test - (using jest)
       ├── integration
       ├── unit
```

### Quick Setup

1. Clone the repo
2. `yarn install` to install node packages
3. Run `yarn dev` to start the app
4. View logs at `tail -f planet-service.log`
5. Run `yarn test` to run specs
6. Run `yarn lint` to run es6 linter

### Config

1. App config is at `src/config.js`

### Sample Request

```

```

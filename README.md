# eslint-config-nrk
Shared eslint config for NRK.

# Usage
`npm i --save-dev git+ssh://git@github.com:nrkno/eslint-config-nrk.git`

<b>IMPORTANT</b>: Point your IDE at the project's local eslint package, not your global one:<br>

`<project>/node_modules/eslint`

## .eslintrc

### Vanilla JavaScript projects using ES6 / JavaScript 2015
```json
{
  "extends": [
    "nrk"
  ]
}
```

### React projects using ES6 / JavaScript 2015
```json
{
  "extends": [
    "nrk",
    "nrk/react"
  ]
}
```

### Legacy ES5 projects
TODO.
# eslint-config-nrk
Shared eslint config for NRK.

# Usage
`npm i --save-dev git+ssh://git@github.com:nrkno/eslint-config-nrk.git`

<b>IMPORTANT</b>: Point your IDE at the projects local eslint package, not your global one:<br>

`<project>/node_modules/eslint`

## .eslintrc

### A vanilla JavaScript project (ES6 / JavaScript 2015)
```json
{
  "extends": [
    "nrk"
  ]
}
```
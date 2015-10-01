# eslint-config-nrk
Shared eslint config for NRK.

# Usage
In your project, type

`npm install --save-dev eslint`

`npm install --save-dev git+ssh://git@github.com:nrkno/eslint-config-nrk.git`

If you are going to use React, you need to install eslint-plugin-react within your project as well:

`npm install --save-dev eslint-plugin-react`

**IMPORTANT**: Point your IDE at the project's local eslint package, not your global one:<br>

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
TODO
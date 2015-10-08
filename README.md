# eslint-config-nrk
Shared eslint config for NRK.

# Usage
In your project, type

`npm install --save-dev eslint`

`npm install --save-dev git+ssh://git@github.com:nrkno/eslint-config-nrk.git`

## With React
If you are using React, you need to install eslint-plugin-react within your project as well:

`npm install --save-dev eslint-plugin-react`

Point your IDE at the project's local eslint package, not your global one:

`<project>/node_modules/eslint`

If you use the ```*.jsx``` extension, tell eslint explicitly to lint jsx files as well:

```eslint . --ext=.js,.jsx``` 

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
# eslint-config-nrk

An open/shared JavaScript coding standard configuration for NRK.no.

## Installation

To install using [npm](https://www.npmjs.com), execute these command in the root of your project:

```sh
npm install --save-dev eslint
npm install --save-dev git+ssh://git@github.com:nrkno/eslint-config-nrk.git
```

### Usage with React
If you are using React, you also need to install [`eslint-plugin-react`]() within your project:

```sh
npm install --save-dev eslint-plugin-react
```

Point your IDE at the project's local `eslint` package, not your global one:

`<project>/node_modules/eslint`

If you use the ```*.jsx``` extension, tell `eslint` explicitly to lint those files as well:

```sh
eslint . --ext=.js,.jsx
```

## Configuration

`eslint` is configured by adding an `.eslintrc` file to the root of your project:

```json
{
  "extends": [
    "nrk"
  ]
}
```

For React-support, you also need to add the `react` extension:

```json
{
  "extends": [
    "nrk",
    "nrk/react"
  ]
}
```

For JSX-support, add the `jsx` extension:

```json
{
  "extends": [
    "nrk",
    "nrk/jsx",
    "nrk/react"
  ]
}
```

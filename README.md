# eslint-config-nrk

An open/shared JavaScript (ES2015) coding standard configuration for NRK.no. Uses [`eslint`](http://eslint.org/) 2.x. For 1.x configuration, see the [1.x branch](https://github.com/nrkno/eslint-config-nrk/tree/1.X).

## Installation

Execute these commands in the root of your project:

```sh
npm install --save-dev eslint
npm install --save-dev eslint-config-nrk
```

### Usage with React
If you are using React, you also need to install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) within your project:

```sh
npm install --save-dev eslint-plugin-react
```

If you use the ```*.jsx``` extension, tell `eslint` explicitly to lint those files as well:

```sh
eslint . --ext=.js,.jsx
```

## Configuration

`eslint` is configured by adding an `.eslintrc.json` file to the root of your project:

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
    "nrk/rules/react"
  ]
}
```

For JSX-support, add the `jsx` extension separately:

```json
{
  "extends": [
    "nrk",
    "nrk/rules/jsx",
    "nrk/rules/react"
  ]
}
```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

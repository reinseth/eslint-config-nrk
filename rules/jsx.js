/* eslint-disable quote-props, quotes */

module.exports = {

  "ecmaFeatures": {
    "jsx": true
  },

  "rules": {
    "react/jsx-boolean-value": 0,                          // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-closing-bracket-location": 0,               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-curly-spacing": [2, "never"],               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-indent-props": [                            // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
      0,
      0
    ],
    "react/jsx-max-props-per-line": [                      // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
      2, {
        maximum: 6
      }
    ],
    "react/jsx-no-duplicate-props": 2,                     // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-literals": 0,                            // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    "react/jsx-no-undef": 2,                               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "jsx-quotes": [2, "prefer-double"],                    // http://eslint.org/docs/rules/jsx-quotes
    "react/jsx-sort-prop-types": 0,                        // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    "react/jsx-sort-props": 0,                             // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-uses-react": 2,                             // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-vars": 2                               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  }

};

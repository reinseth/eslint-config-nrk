module.exports = {

  "ecmaFeatures": {
    "jsx": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/display-name": 2,                               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/forbid-prop-types": 0,                          // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
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
    "react/jsx-uses-vars": 2,                              // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/no-danger": 1,                                  // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    "react/no-did-mount-set-state": [                      // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
      1,
      "allow-in-func"
    ],
    "react/no-did-update-set-state": 2,                    // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-direct-mutation-state": 2,                   // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-multi-comp": [1, {"ignoreStateless": true}], // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    "react/no-set-state": 0,                               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    "react/no-unknown-property": 2,                        // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/prefer-es6-class": 0,                           // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    "react/prop-types": 2,                                 // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/react-in-jsx-scope": 2,                         // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/require-extension": 0,                          // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/self-closing-comp": 2,                          // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/sort-comp": 2,                                  // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/wrap-multilines": 2                             // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
  }

};

/* eslint-disable quote-props, quotes */

module.exports = {

  "plugins": [
    "react"
  ],
  "rules": {
    "react/display-name": 2,                               // github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
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

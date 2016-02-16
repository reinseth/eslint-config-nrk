/* eslint-disable quote-props, quotes */

module.exports = {

  "ecmaFeatures": {
    "arrowFunctions": true, // enable arrow functions
    "blockBindings": true, // - enable let and const (aka block bindings)
    "classes": true, // - enable classes
    "defaultParams": true, // - enable default function parameters
    "destructuring": true, // - enable destructuring
    "forOf": true, // - enable for-of loops
    "generators": false, // - enable generators
    "modules": true, // - enable modules and global strict mode
    "objectLiteralComputedProperties": true, // - enable computed object literal property names
    "objectLiteralDuplicateProperties": false, // - enable duplicate object literal properties in strict mode
    "objectLiteralShorthandMethods": true, // - enable object literal shorthand methods
    "objectLiteralShorthandProperties": true, // - enable object literal shorthand properties
    "regexUFlag": true, // enable the regular expression u flag
    "regexYFlag": true, // - enable the regular expression y flag
    "restParams": true, // - enable the rest parameters
    "spread": true, // - enable the spread operator for arrays
    "superInFunctions": true, // - enable super references inside of functions
    "templateStrings": true, // - enable template strings
    "jsx": false, // - enable JSX
    "experimentalObjectRestSpread": true // enable support for the experimental object rest/spread properties
  },

  "rules": {

    /**
     * Possible errors
     */
    "comma-dangle": 2,                // http://eslint.org/docs/rules/comma-dangle
    "no-cond-assign": [               // http://eslint.org/docs/rules/no-cond-assign
      2, "always"
    ],
    "no-console": 2,                  // http://eslint.org/docs/rules/no-console
    "no-constant-condition": 2,       // http://eslint.org/docs/rules/no-constant-condition
    "no-control-regex": 2,            // http://eslint.org/docs/rules/no-control-regex
    "no-debugger": 2,                 // http://eslint.org/docs/rules/no-debugger
    "no-dupe-args": 2,                // http://eslint.org/docs/rules/no-dupe-args
    "no-dupe-keys": 2,                // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": 2,           // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty-character-class": 2,    // http://eslint.org/docs/rules/no-empty-character-class
    "no-empty": 2,                    // http://eslint.org/docs/rules/no-empty
    "no-ex-assign": 2,                // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-boolean-cast": 2,       // http://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-parens": [              // http://eslint.org/docs/rules/no-extra-parens
      2, "functions"
    ],
    "no-extra-semi": 2,               // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": 2,              // http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations": 1,       // http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp": 2,           // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": 2,     // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-negated-in-lhs": 2,           // http://eslint.org/docs/rules/no-negated-in-lhs
    "no-obj-calls": 2,                // http://eslint.org/docs/rules/no-obj-calls
    "no-regex-spaces": 2,             // http://eslint.org/docs/rules/no-regex-spaces
    "no-sparse-arrays": 2,            // http://eslint.org/docs/rules/no-sparse-arrays
    "no-unreachable": 2,              // http://eslint.org/docs/rules/no-unreachable
    "use-isnan": 2,                   // http://eslint.org/docs/rules/use-isnan
    "valid-jsdoc": 2,                 // http://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof": 2,                // http://eslint.org/docs/rules/valid-typeof
    "no-unexpected-multiline": 2,     // http://eslint.org/docs/rules/no-unexpected-multiline

    /**
     * Best practices
     */
    "accessor-pairs": 2,              // http://eslint.org/docs/rules/accessor-pairs
    "block-scoped-var": 2,            // http://eslint.org/docs/rules/block-scoped-var
    "complexity": [2, 9],             // http://eslint.org/docs/rules/complexity
    "consistent-return": 2,           // http://eslint.org/docs/rules/consistent-return
    "curly": 2,                       // http://eslint.org/docs/rules/curly
    "default-case": 2,                // http://eslint.org/docs/rules/default-case
    "dot-notation": [                 // http://eslint.org/docs/rules/dot-notation
      2, {
        "allowKeywords": true
      }
    ],
    "dot-location": 0,                // http://eslint.org/docs/rules/dot-location
    "eqeqeq": 2,                      // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": 2,                // http://eslint.org/docs/rules/guard-for-in
    "no-alert": 2,                    // http://eslint.org/docs/rules/no-alert
    "no-caller": 2,                   // http://eslint.org/docs/rules/no-caller
    "no-case-declarations": 2,        // http://eslint.org/docs/rules/no-case-declarations
    "no-div-regex": 2,                // http://eslint.org/docs/rules/no-div-regex
    "no-empty-label": 2,              // http://eslint.org/docs/rules/no-empty-label
    "no-empty-pattern": 2,            // http://eslint.org/docs/rules/no-empty-pattern
    "no-else-return": 2,              // http://eslint.org/docs/rules/no-else-return
    "no-eq-null": 2,                  // http://eslint.org/docs/rules/no-eq-null
    "no-eval": 2,                     // http://eslint.org/docs/rules/no-eval
    "no-extend-native": 2,            // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind": 2,               // http://eslint.org/docs/rules/no-extra-bind
    "no-fallthrough": 2,              // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": 2,         // http://eslint.org/docs/rules/no-floating-decimal
    "no-invalid-this": 2,             // http://eslint.org/docs/rules/no-invalid-this
    "no-implicit-coercion": [         // http://eslint.org/docs/rules/no-implicit-coercion
      2, {
        "boolean": false,
        "number": true,
        "string": true
      }
    ],
    "no-implied-eval": 2,             // http://eslint.org/docs/rules/no-implied-eval
    "no-iterator": 2,                 // http://eslint.org/docs/rules/no-iterator
    "no-labels": 2,                   // http://eslint.org/docs/rules/no-labels
    "no-lone-blocks": 2,              // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": 2,                // http://eslint.org/docs/rules/no-loop-func
    "no-magic-numbers": 0,            // http://eslint.org/docs/rules/no-magic-numbers
    "no-multi-spaces": 2,             // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str": 2,                // http://eslint.org/docs/rules/no-multi-str
    "no-native-reassign": 2,          // http://eslint.org/docs/rules/no-native-reassign
    "no-new": 2,                      // http://eslint.org/docs/rules/no-new
    "no-new-func": 2,                 // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers": 2,             // http://eslint.org/docs/rules/no-new-wrappers
    "no-octal": 2,                    // http://eslint.org/docs/rules/no-octal
    "no-octal-escape": 2,             // http://eslint.org/docs/rules/no-octal-escape
    "no-param-reassign": 1,           // http://eslint.org/docs/rules/no-param-reassign
    "no-process-env": 1,              // http://eslint.org/docs/rules/no-process-env
    "no-proto": 2,                    // http://eslint.org/docs/rules/no-proto
    "no-redeclare": 2,                // http://eslint.org/docs/rules/no-redeclare
    "no-return-assign": 2,            // http://eslint.org/docs/rules/no-return-assign
    "no-script-url": 2,               // http://eslint.org/docs/rules/no-script-url
    "no-self-compare": 2,             // http://eslint.org/docs/rules/no-self-compare
    "no-sequences": 2,                // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": 2,            // http://eslint.org/docs/rules/no-throw-literal
    "no-unused-expressions": [        // http://eslint.org/docs/rules/no-unused-expressions
      2, {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    "no-useless-call": 2,             // http://eslint.org/docs/rules/no-useless-call
    "no-useless-concat": 2,           // http://eslint.org/docs/rules/no-useless-concat
    "no-void": 2,                     // http://eslint.org/docs/rules/no-void
    "no-warning-comments": 2,         // http://eslint.org/docs/rules/no-warning-comments
    "no-with": 2,                     // http://eslint.org/docs/rules/no-with
    "radix": 2,                       // http://eslint.org/docs/rules/radix
    "vars-on-top": 0,                 // http://eslint.org/docs/rules/vars-on-top
    "wrap-iife": [2, "any"],          // http://eslint.org/docs/rules/wrap-iife
    "yoda": 2,                        // http://eslint.org/docs/rules/yoda

    /**
     * Strict mode
     */
    // babel inserts "use strict"; for us
    "strict": [2, "never"],          // http://eslint.org/docs/rules/strict

    /**
     * Variables
     */
    "init-declarations": 0,           // http://eslint.org/docs/rules/init-declarations
    "no-catch-shadow": 2,             // http://eslint.org/docs/rules/no-catch-shadow
    "no-delete-var": 2,               // http://eslint.org/docs/rules/no-delete-var
    "no-label-var": 2,                // http://eslint.org/docs/rules/no-label-var
    "no-shadow-restricted-names": 2,  // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-shadow": 0,                   // http://eslint.org/docs/rules/no-shadow
    "no-undef-init": 2,               // http://eslint.org/docs/rules/no-undef-init
    "no-undef": 2,                    // http://eslint.org/docs/rules/no-undef
    "no-undefined": 2,                // http://eslint.org/docs/rules/no-undefined
    "no-unused-vars": [2, {           // http://eslint.org/docs/rules/no-unused-vars
      "vars": "all",                  // ... checks all variables including those in global scope
      "args": "after-used"            // ... only the last argument must be used
    }],
    "no-use-before-define": [2, "nofunc"], // http://eslint.org/docs/rules/no-use-before-define

    /**
     * Stylistic issues
     */
    "array-bracket-spacing": 0,       // http://eslint.org/docs/rules/array-bracket-spacing
    "block-spacing": [2, "always"],   // http://eslint.org/docs/rules/block-spacing
    "brace-style": 2,                 // http://eslint.org/docs/rules/brace-style
    "camelcase": [                    // http://eslint.org/docs/rules/camelcase
      2, {
        "properties": "always"
      }
    ],
    "comma-spacing": [                // http://eslint.org/docs/rules/comma-spacing
      2, {
        "before": false,
        "after": true}
    ],
    "comma-style": [2, "last"],       // http://eslint.org/docs/rules/comma-style
    "computed-property-spacing": [    // http://eslint.org/docs/rules/computed-property-spacing
      2, "never"
    ],
    "consistent-this": [2, "self"],   // http://eslint.org/docs/rules/consistent-this
    "eol-last": 2,                    // http://eslint.org/docs/rules/eol-last
    "func-names": 0,                  // http://eslint.org/docs/rules/func-names
    "func-style": 0,                  // http://eslint.org/docs/rules/func-style
    "id-length": 0,                   // http://eslint.org/docs/rules/id-length,
    "id-match": 0,                    // http://eslint.org/docs/rules/id-match
    "indent": [                       // http://eslint.org/docs/rules/indent
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [                  // http://eslint.org/docs/rules/key-spacing
      2, {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "linebreak-style": [2, "unix"],   // http://eslint.org/docs/rules/linebreak-style
    "lines-around-comment": 2,        // http://eslint.org/docs/rules/lines-around-comment
    "max-depth": [2, 4],              // http://eslint.org/docs/rules/max-depth
    "max-len": [0, 80],               // http://eslint.org/docs/rules/max-len
    "max-nested-callbacks": [2, 3],   // http://eslint.org/docs/rules/max-nested-callbacks
    "max-params": [2, 3],             // http://eslint.org/docs/rules/max-params
    "max-statements": [0, 2],         // http://eslint.org/docs/rules/max-statements
    "new-cap": 2,                     // http://eslint.org/docs/rules/new-cap
    "new-parens": 2,                  // http://eslint.org/docs/rules/new-parens
    "newline-after-var": 0,           // http://eslint.org/docs/rules/newline-after-var
    "no-array-constructor": 2,        // http://eslint.org/docs/rules/no-array-constructor
    "no-bitwise": 2,                  // http://eslint.org/docs/rules/no-bitwise
    "no-continue": 2,                 // http://eslint.org/docs/rules/no-continue
    "no-inline-comments": 0,          // http://eslint.org/docs/rules/no-inline-comments
    "no-lonely-if": 2,                // http://eslint.org/docs/rules/no-lonely-if
    "no-mixed-spaces-and-tabs": [     // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
      2,
      "smart-tabs"
    ],
    "no-multiple-empty-lines": [      // http://eslint.org/docs/rules/no-multiple-empty-lines
      1,
      {
        "max": 3
      }
    ],
    "no-nested-ternary": 2,           // http://eslint.org/docs/rules/no-nested-ternary
    "no-negated-condition": 0,        // http://eslint.org/docs/rules/no-negated-condition
    "no-new-object": 2,               // http://eslint.org/docs/rules/no-new-object
    "no-plusplus": 0,                 // http://eslint.org/docs/rules/no-plusplus
    "no-restricted-syntax": 0,        // http://eslint.org/docs/rules/no-restricted-syntax
    "no-spaced-func": 2,              // http://eslint.org/docs/rules/no-spaced-func
    "no-ternary": 0,                  // http://eslint.org/docs/rules/no-ternary
    "no-trailing-spaces": [           // http://eslint.org/docs/rules/no-trailing-spaces
      2,
      {
        "skipBlankLines": true
      }
    ],
    "no-underscore-dangle": 0,        // http://eslint.org/docs/rules/no-underscore-dangle
    "no-unneeded-ternary": 2,         // http://eslint.org/docs/rules/no-unneeded-ternary
    "object-curly-spacing": 0,        // http://eslint.org/docs/rules/object-curly-spacing
    "one-var": 0,                     // http://eslint.org/docs/rules/one-var
    "operator-assignment": 0,         // http://eslint.org/docs/rules/operator-assignment
    "operator-linebreak": [           // http://eslint.org/docs/rules/operator-linebreak
      2,
      "before",
      {
        "overrides":
        {
          "?":
            "after"
        }
      }
    ],
    "padded-blocks": 0,               // http://eslint.org/docs/rules/padded-blocks
    "quote-props": [2, "as-needed"],  // http://eslint.org/docs/rules/quote-props
    "quotes": [2, "single"],          // http://eslint.org/docs/rules/quotes
    "require-jsdoc": 0,               // http://eslint.org/docs/rules/require-jsdoc
    "semi-spacing": 2,                // http://eslint.org/docs/rules/semi-spacing
    "semi": [2, "always"],            // http://eslint.org/docs/rules/semi.html
    "sort-vars": 0,                   // http://eslint.org/docs/rules/sort-vars
    "space-after-keywords": 0,        // http://eslint.org/docs/rules/space-after-keywords
    "space-before-keywords": 0,       // http://eslint.org/docs/rules/space-before-keywords
    "space-before-blocks": 0,         // http://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren": 0, // http://eslint.org/docs/rules/space-before-function-paren
    "space-in-parens": 0,             // http://eslint.org/docs/rules/space-in-parens
    "space-infix-ops": 0,             // http://eslint.org/docs/rules/space-infix-ops
    "space-return-throw-case": 0,     // http://eslint.org/docs/rules/space-return-throw-case
    "space-unary-ops": 0,             // http://eslint.org/docs/rules/space-unary-ops
    "spaced-comment": 0,              // http://eslint.org/docs/rules/spaced-comment
    "wrap-regex": 0,                  // http://eslint.org/docs/rules/wrap-regex


    /**
     * ES6
     */
    "arrow-body-style": 0,            // http://eslint.org/docs/rules/arrow-body-style
    "arrow-parens": [2, "as-needed"], // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": 2,               // http://eslint.org/docs/rules/arrow-spacing
    "constructor-super": 2,           // http://eslint.org/docs/rules/constructor-super
    "generator-star-spacing": 0,      // http://eslint.org/docs/rules/generator-star-spacing
    "no-arrow-condition": 2,          // http://eslint.org/docs/rules/no-arrow-condition
    "no-class-assign": 2,             // http://eslint.org/docs/rules/no-class-assign
    "no-const-assign": 2,             // http://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members": 2,       // http://eslint.org/docs/rules/no-dupe-class-members
    "no-this-before-super": 2,        // http://eslint.org/docs/rules/no-this-before-super
    "no-var": 2,                      // http://eslint.org/docs/rules/no-var
    "object-shorthand": 1,            // http://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback": 2,       // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": 2,                // http://eslint.org/docs/rules/prefer-const
    "prefer-spread": 2,               // http://eslint.org/docs/rules/prefer-spread
    "prefer-reflect": 0,              // http://eslint.org/docs/rules/prefer-reflect
    "prefer-template": 2,             // http://eslint.org/docs/rules/prefer-template
    "require-yield": 0                // http://eslint.org/docs/rules/require-yield
  },
  "globals": {
    "define": true,
    "require": true
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }

};

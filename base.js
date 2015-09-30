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
    "comma-dangle": 0,                // http://eslint.org/docs/rules/comma-dangle
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
    "complexity": 0,                  // http://eslint.org/docs/rules/complexity TODO
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
    "no-div-regex": 2,                // http://eslint.org/docs/rules/no-div-regex
    "no-else-return": 2,              // http://eslint.org/docs/rules/no-else-return
    "no-eq-null": 2,                  // http://eslint.org/docs/rules/no-eq-null
    "no-eval": 2,                     // http://eslint.org/docs/rules/no-eval
    "no-extend-native": 2,            // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind": 2,               // http://eslint.org/docs/rules/no-extra-bind
    "no-fallthrough": 2,              // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": 2,         // http://eslint.org/docs/rules/no-floating-decimal
    "no-implicit-coercion": [         // http://eslint.org/docs/rules/no-implicit-coercion
      2, {
        "boolean": false,
        "number": true,
        "string": true
      }
    ],
    "no-implied-eval": 2,             // http://eslint.org/docs/rules/no-implied-eval
    "no-lone-blocks": 2,              // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": 2,                // http://eslint.org/docs/rules/no-loop-func
    "no-multi-spaces": 2,             // http://eslint.org/docs/rules/no-multi-spaces
    "no-multi-str": 2,                // http://eslint.org/docs/rules/no-multi-str
    "no-native-reassign": 2,          // http://eslint.org/docs/rules/no-native-reassign
    "no-new": 2,                      // http://eslint.org/docs/rules/no-new
    "no-new-func": 2,                 // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers": 2,             // http://eslint.org/docs/rules/no-new-wrappers
    "no-octal": 2,                    // http://eslint.org/docs/rules/no-octal
    "no-octal-escape": 2,             // http://eslint.org/docs/rules/no-octal-escape
    "no-param-reassign": 1,           // http://eslint.org/docs/rules/no-param-reassign
    "no-proto": 2,                    // http://eslint.org/docs/rules/no-proto
    "no-redeclare": 2,                // http://eslint.org/docs/rules/no-redeclare
    "no-return-assign": 2,            // http://eslint.org/docs/rules/no-return-assign
    "no-script-url": 2,               // http://eslint.org/docs/rules/no-script-url
    "no-self-compare": 2,             // http://eslint.org/docs/rules/no-self-compare
    "no-sequences": 2,                // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": 2,            // http://eslint.org/docs/rules/no-throw-literal
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
    "no-shadow": 0,                   // http://eslint.org/docs/rules/no-shadow TODO
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
    "brace-style": [2, "stroustrup"], // http://eslint.org/docs/rules/brace-style
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
    "indent": [2, 2],                 // http://eslint.org/docs/rules/indent
    "key-spacing": [                  // http://eslint.org/docs/rules/key-spacing
      2, {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "linebreak-style": [2, "unix"],   // http://eslint.org/docs/rules/linebreak-style
    "lines-around-comment": 2,        // http://eslint.org/docs/rules/lines-around-comment
    "max-nested-callbacks": [2, 3],   // http://eslint.org/docs/rules/max-nested-callbacks
    "no-lonely-if": 2,                // http://eslint.org/docs/rules/no-lonely-if
    "no-nested-ternary": 2,           // http://eslint.org/docs/rules/no-nested-ternary
    "no-unneeded-ternary": 2,         // http://eslint.org/docs/rules/no-unneeded-ternary
    "quote-props": [2, "as-needed"],  // http://eslint.org/docs/rules/quote-props

    // MAX NESTED CALLBACKS ...

    "quotes": [2, "single"],
    "semi": [2, "never"],             // Even in "never" mode, semicolons are still allowed to disambiguate statements beginning
                                      // with [, (, /, +, or -: http://eslint.org/docs/rules/semi


    /**
     * ES6
     */
    "arrow-parens": [2, "as-needed"], // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": 2,               // http://eslint.org/docs/rules/arrow-spacing
    "constructor-super": 2,           // http://eslint.org/docs/rules/constructor-super
    "generator-star-spacing": 0,      // http://eslint.org/docs/rules/generator-star-spacing TODO
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
    "require-yield": 0,               // http://eslint.org/docs/rules/require-yield TODO


  },
  "globals": {
    "define": true,
    "require": true
  },
  "env": {
    "es6": true,
    "browser": true
  }

};
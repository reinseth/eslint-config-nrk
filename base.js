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
     * Strict mode
     */

    // babel inserts "use strict"; for us
    "strict": [2, "never"],          // http://eslint.org/docs/rules/strict

    /**
     * General
     */

    "block-spacing": [2, "always"],
    "brace-style": [2, "stroustrup"], // http://eslint.org/docs/rules/brace-style
    "camelcase": [2, {"properties": "always"}], // http://eslint.org/docs/rules/camelcase
    "comma-spacing": [2, {"before": false, "after": true}], // http://eslint.org/docs/rules/comma-spacing
    "comma-style": [2, "last"], // http://eslint.org/docs/rules/comma-style
    "indent": [2, 2], // http://eslint.org/docs/rules/indent
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}], // http://eslint.org/docs/rules/key-spacing
    "linebreak-style": [2, "unix"], // http://eslint.org/docs/rules/linebreak-style
    "max-nested-callbacks": [2, 3], // http://eslint.org/docs/rules/max-nested-callbacks
    "no-extra-semi": 2, // http://eslint.org/docs/rules/no-extra-semi
    "no-lonely-if": 2, // http://eslint.org/docs/rules/no-lonely-if
    "no-nested-ternary": 2, // http://eslint.org/docs/rules/no-nested-ternary
    "no-unneeded-ternary": 2, // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unexpected-multiline": 2, // http://eslint.org/docs/rules/no-unexpected-multiline
    "quote-props": [2, "as-needed"], // http://eslint.org/docs/rules/quote-props
    "quotes": [2, "single"],
    "semi": [2, "never"], // Even in "never" mode, semicolons are still allowed to disambiguate statements beginning
                          // with [, (, /, +, or -: http://eslint.org/docs/rules/semi

    /**
     * Best practices
     */
    "default-case": 2,               // http://eslint.org/docs/rules/default-case

    /**
     * ES6
     */

    "arrow-parens": [2, "as-needed"], // http://eslint.org/docs/rules/arrow-parens
    "arrow-spacing": 2,               // http://eslint.org/docs/rules/arrow-spacing
    "no-var": 2,                      // http://eslint.org/docs/rules/no-var
    "no-const-assign": 2,             // http://eslint.org/docs/rules/no-const-assign
    "no-dupe-class-members": 2,       // http://eslint.org/docs/rules/no-dupe-class-members
    "object-shorthand": 2,            // http://eslint.org/docs/rules/object-shorthand
    "prefer-arrow-callback": 2,       // http://eslint.org/docs/rules/prefer-arrow-callback
    "prefer-const": 2,                // http://eslint.org/docs/rules/prefer-const
    "prefer-spread": 2,               // http://eslint.org/docs/rules/prefer-spread

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
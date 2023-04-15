module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:sonarjs/recommended",
        "plugin:react-hooks/recommended",
        "plugin:clean-regex/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": "tsconfig.json"
    },
    "plugins": [
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "sonarjs",
        "clean-regex"
    ],
    "rules": {
        "eqeqeq": "error",
        "max-classes-per-file": "off",
        "consistent-return": "off",
        "promise/catch-or-return": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": true,
                "variables": true
            }
        ],
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": [
            "error"
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "off",
            "interface"
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "sonarjs/cognitive-complexity": "off",
        "sonarjs/no-duplicate-string": "off",
        "clean-regex/no-obscure-range": "warn",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                "children": "never",
                "props": "never"
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto",
                "tabWidth": 2,
                "singleQuote": false,
                "jsxSingleQuote": false,
                "quoteProps": "as-needed",
                "printWidth": 80,
                "importOrder": [
                    "^react.*$",
                    "<THIRD_PARTY_MODULES>",
                    "^[^(.|api)].*$",
                    "^api/.*$",
                    "^[^(.|components)].*$",
                    "^components/.*$",
                    "^[^(.|kep)].*$",
                    "^kep/.*$",
                    "^[^(.|models)].*$",
                    "^models/.*$",
                    "^[^(.|modules)].*$",
                    "^modules/.*$",
                    "^[^(.|services)].*$",
                    "^services/.*$",
                    "^[^(.|types)].*$",
                    "^types/.*$",
                    "^[^(.|utils)].*$",
                    "^utils/.*$",
                    "^(../|./).*"
                ],
                "importOrderSeparation": false,
                "importOrderSortSpecifiers": true,
                "importOrderParserPlugins": [
                    "typescript",
                    "jsx",
                    "decorators-legacy"
                ]
            }
        ],
        "react/jsx-key": "warn",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "paths": [
                    "/src"
                ]
            },
            "node": {
                "paths": [
                    "/src"
                ]
            }
        },
        "react": {
            "version": "detect"
        }
    },
    "ignorePatterns": [
        "build/*",
        "cypress/*",
        "cypress.config.ts",
        "vite.config.ts"
    ]
}
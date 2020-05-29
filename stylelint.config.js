module.exports = {
    "extends": "stylelint-config-recommended",
    "plugins": [
      "stylelint-scss"
    ],
    "rules": {
      "selector-nested-pattern": "^&",
      "indentation": 2,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,
      "declaration-empty-line-before": null,
      "value-keyword-case": null,
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": ["extends"]
        }
      ],
      "block-no-empty": null
    }
}
module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    //'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'no-console': 0,
    'vue/html-indent': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-bind-style': 0
  }
}

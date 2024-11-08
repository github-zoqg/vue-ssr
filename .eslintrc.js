module.exports = {
  // root: true,
  // "env": {
  //   "node": true
  // },
  // "extends": ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/essential",
    // "@vue/standard",
    "eslint:recommended", // eslint的建议规则，参考：https://eslint.bootcss.com/docs/rules/
    // 是@vue/eslint-config-prettier的简写, 告诉eslint把prettier规则做为拓展引用到我们自己的项目中来
    "@vue/prettier",
  ],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "no-return-await": "off",
    "vue/multi-word-component-names": 0,
    "vue/no-unused-components": 0,
  },
};

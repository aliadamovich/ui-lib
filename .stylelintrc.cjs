module.exports = {
  extends: [
    '@it-incubator/stylelint-config',
    'stylelint-config-standard',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex',
      'align-items',
      'justify-content',
      'width',
      'height',
      'padding',
      'margin',
      'font-size',
      'color',
      'background',
    ],
  },
}
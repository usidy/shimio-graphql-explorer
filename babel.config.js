module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-numeric-separator"],
    ["@babel/plugin-proposal-private-methods", { loose: true }]
  ],
}
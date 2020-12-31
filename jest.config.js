module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "testMatch": [
    "**/test/**/*.spec.ts"
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "./coverage",
  "testEnvironment": "node"
}
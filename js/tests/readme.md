## Setup and install

Open terminal and run the following command:
npm install

## Running tests

To run the tests, cd into the tests directory & use the following commands in terminal:
```bash
node .\<test_name>
```

for example:
```bash
node .\exampleTes.spec.js
```

## Code generation

To use the code generator, use the follow command with a link to the webpage you want to test

```bash
npx playwright codegen <web_page>
```

```bash
npx playwright codegen https://ollytdev.github.io/anima-character-generator/#
```
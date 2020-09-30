# React Component Sample 

This repo is used to practice `atomic` react component, write `test case` for componet and document with `storybooks`, etc...  
We will use `todo-app` as an example for learning. Any learning or experiment will be updated at `READMe.md`.  

## Post Installation

After done install with `create-react-app`, install the following package:
- `styled-components`, `styled-tools`
- `storybook` with `react`
- `typescript` (optional but encourage to practice with it)
- `props-types`
- `classnames`
- any others topic you wish to practice such as `react-router`, `jest`, `react-redux`

install:  
```
npm install classnames props-types styled-components styled-tools loadash
```

story book install:  
```
npx sb init
```

## Post Settings

### 1. Add Absolute path to your component

- create `jsconfig.json` or `tsconfig.json` if you are using `typescript`
- add in the following config:

```
  {
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

## Happy Learning !
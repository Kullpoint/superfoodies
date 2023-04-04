## How to install project
```
git clone https://github.com/Kullpoint/superfoodies.git .
git checkout -b branchName
npm i
```

## How to run project

Start gulp watcher (for building sass files to css) and shopify dev server
```
npm run dev
```

## Whats new in structure?
### section
Use the **EXAMPLE-SECTION.liquid** file to see how to build sections right.
### snippets
`Section-styles.liquid` is used to create and include section style file in end of head tag.
(You need to use ```{% render 'Section-styles', name: 'section-example' %}``` code in start of every section)

`Section-scripts.liquid` is used to create and include section script file in end of body tag.
(You need to use ```{% render 'Section-scripts', name: 'section-example' %}``` code in start of every section)

`Section-backgrounds.liquid`
### New src folder
In this folder you can find styles that written on ScSS. 
This is an entrypoint of all styles on project.

## Fonts
Operetta8
```font-family: 'Operetta8';```
Helvetica
```font-family: 'Helvetica';```
# Tye Hickman
## SWDV 665 - Advanced Topics (Mobile application development)
## Week 1 Assignment - Introduction to TypeScript

---

### Instructions
Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think will be necessary.

Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.

The output of this assignment will be grocery.ts and groceries.html displaying the output.

---

This assignment was a good introduction to TypeScript. I learned how to install TypeScript:

`npm install -g typescript`

I also learned that you don't include the TypeScript in your HTML document. It must first be compiled to JavaScript using the CLI:

`tsc grocery.ts` (From the root of your project)

This also had the side effect of addint a `tsconfig.json` file and a compiled `grocery.js` file to the repo so I felt a README would help explain how I arrived at this solution.

I replaced the contents of `tsconfig.json` with what I believe to be the minimum paremeters to achieve the desired outcome. I set the root and output directories to the project root. 

---

### Running the project

To run the project you will need to have TypeScript installed. I am including the compiled JS in the repo for convenience however, to compile it yourself you will need the TypeScript package. Once cloned, you should be able to run `tsc grocery.ts` from a command prompt or terminal in the root of the project. This will overwrite the compiled JS. From there, open the `grocery.html` file in a browser.
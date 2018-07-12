# Typescript Server
This project aims to solve all of the problems I have with backend frameworks by being built from the ground up with no external dependencies. Well, it does use Pug and some dev dependencies, but I'm not fucking with those libraries anytime soon.

### Setup and Usage

After cloning this project you'll need to perform some minor setup:
1. Install Typescript Globally if you don't already have it (`npm install -g typescript`)
2. Install the projects dependencies and types (`yarn` or `npm install`)
3. Compile the Typescript files into useable JS files (`yarn build` or `npm run build`)
4. Start the server (`node dist`, or `NODE_ENV=production node dist` for production mode (port 8080 by default))

### Other Useful Scripts

#### This project uses a few NPM scripts to make life easier:
Build Typescript Files
`yarn build` or `npm run build`

Build .scss Files
`yarn build-css` or `npm run build-css`

Watch Typescript Files for Automatic Compilation
`yarn watch` or `npm run watch`

Watch .js, .pug, and .css files and automatically reload server on change
`yarn dev` or `npm run dev`

Watch .scss files and compile on-save
`yarn watch-css` or `npm run watch-css`
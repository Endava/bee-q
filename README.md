# **Bee-Q**, a design system initiative by Endava.

This repository holds the source code of the web component present on the Bee-Q Design System.

## ⚠️ Before Starting ⚠️

### Structure 🧩

The project as been structured as an [NX monorepo](https://nx.dev) :

```
├── 📁 apps
├── 📁 libs
  ├── 📁 bee-q
  ├── 📁 bee-q-react
  ├── ...
├── 📁 tools
├── package.json
├── package-lock.json
```

where:

- **[libs/bee-q](./libs/bee-q/):** core library (source for all the elements/components implemented)
- **[libs/bee-q-react](./libs/bee-q-react):** react specific wrapper for Bee-Q core library

### Dependencies 📡

A recent version (>=16) of [`NodeJS`](https://nodejs.org/en/download/)

> Note that you will need to use npm 6 or higher.

## Running the project 🏃‍

To develop/extend components on the Bee-Q Design System, clone this repo to a new directory:

```bash
git clone git@github.com:dgonzalezr/bee-q.git Bee-Q-Design-System
git checkout develop
cd Bee-Q-Design-System
```

### Installation ⚙️

Simply run:

```bash
npm ci
# Make sure to build first the project before starting it
npm run build
npm start
```

Start coding 😃!

### Build 📦

For a Production build, just run:

```bash
npm run build
```

## Contributing 💻

💥  If you are in the mood and want to help 🙂, please read carefully our [Contributing Guidelines](./CONTRIBUTING.md) and Development Standards.

## Documentation 📖

### StencilJs

Need help? Check out the Stenciljs docs here (https://stenciljs.com/).

### Tailwind CSS

We use Tailwind CSS for the components style, please take a look at their documentation here: (https://tailwindcss.com/docs/)

# Metaverse Bootstrap
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

This project uses [Pinser metaverse](https://www.pinser.world).

<p style="text-align: center;"><img src="https://www.pinser.agency/wp-content/uploads/2022/06/logo-long-e1656513928420.png"></p>

🔎 **Smart, Fast and Extensible Build System**

## Generate an application

Run `nx workspace-generator pins my-pins pins-domain` to generate an Pin's.

You can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx workspace-generator pins my-pins pins-domain` to generate a Pin's.

Pin's are shareable across libraries and applications. They can be imported from `@metaverse-bootstrap/pins-domain/my-pins`.

## Development server

Run `nx serve metaverse` for a dev server. Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build metaverse` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test metaverse` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

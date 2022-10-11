# Metaverse Bootstrap

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/pinser-metaverse/metaverse-boostrap/blob/master/apps/metaverse/src/lib/metaverse.space.ts)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

![Pinser logo](https://www.pinser.agency/wp-content/uploads/2022/06/logo-long-e1656513928420.png)

This project uses [Pinser metaverse](https://www.pinser-metaverse.com).

## Generate a pin's

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

Visit the [Documentation](https://www.pinser-metaverse.com) to learn more.

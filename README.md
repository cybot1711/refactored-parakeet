<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]

<img src="image-goes-here">

## About the project

Frontend template app.

The core focus of this part of the solution:
- Whatever you want to do here

<p align="right">(<a href="#top">back to top</a>)</p>


### Technologies and Libraries used

The core libraries are listed here:

* [ReactJS](https://reactjs.org/)
* [react-query](https://react-query.tanstack.com/)
* [MaterialUI](https://mui.com/)
* [Typescript](https://www.typescriptlang.org/)
* [CreatReactApp](https://create-react-app.dev/)
* [Sentry](https://sentry.io/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

ESLint and prettier are set up as combined config. Formatting will run as part of linting rules.

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites
>`node version set to LTS`  
`yarn package manager`

### Installation

1. ```shell
   yarn
   ```
2. You should have no errors after installation and that is pretty much it for installation.

<p align="right">(<a href="#top">back to top</a>)</p>


<div id="usage"></div>
## Usage

Here will follow steps to run the project.
* To start the application in watch mode
    ```shell
    yarn start
    ```
* To lint and format the code
    ```shell
    yarn lint
    ```
* To fix linting and formatting
    ```shell
    yarn lint:fix
    ```
* Runs storybook
    ```shell
    yarn storybook
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap


## Follow up


### Implementation

_Library Selection_
* ReactJS - The required tool for the job.
* React-Query - Easy and straightforward data synchronization.
* Typescript - For some added Type safety to tighten up the data contract across various segments of the app. Also aids in catching
  bugs that you might have missed.
* Prettier - Formats the code.
* ESLint - Enforce som standards and rules. Basic configuration.
* ESLint - Do not let unwanted things slip through.

_Start Command_ `yarn start` (<a href="#usage">Refer to the usage section</a>)

### General
Given more time I would Implement the following.
* Add a better Error Page.
* Get the correct font.
* Add storybook here and import ui-kit stories.
* Add custom error handling in Insights and drawer.
* Add the support for internationalisation react-intl.
* Add some custom test renderers to wrap components with providers.
* Add pre-flight step github action for test, lint etc.
* Depending on production setup I would containerise this application to quickly scale it.
* Mock useQuery and push coverage higher.
* Implement path aliases for module imports.
* Gather coverage and add badges Coveralls etc.
* If there should be more routes, we can lazy load them.
* Add global notification's system for toasts warnings etc.

<p align="right">(<a href="#top">back to top</a>)</p>


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jahil-khalfe/


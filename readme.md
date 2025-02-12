<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Regression Set Typescript</h3>

  <p align="center">
    A Playwright and Typescript regression pack for the EPLOY and SUFA connection
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is aimed at New and Benched FDM employees that are looking to upskill in Typescript and playwright. There are also some key features in this project that will enforce coding standards such as not using console log lines and requiring semi colons at the end of each needed line.

<!-- BUILT WITH -->

## Built With

This project has been built with Typescript and the Playwright framework. Further tools are ESlint Prettier, Husky and Zod.

<!-- GETTING STARTED -->

## Getting Started

Please follow these steps to setup the project locally on your own machine.

### Prerequisites

- Node version 22.14.1
- A copy of the Repo
- Your favourite IDE (Personally I use VSCode)

### Installation

Once you have a copy of the Repo and the correct node version installed open your favourite IDE and in the command line run the command `sh npm install`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Usage -->

## Usage

When committing changes to this project please make sure that you run the linting by running the commands `sh npm run lint` and `sh npm run prettify` please do this before you commit. Also ensure that all of your tests are passing.

Prior to running you will need access to multiple areas and will need logins for these areas. You will need to add these details to your .env file along with the links to these areas. The test suite will fail to start.

To run this project use the command `sh npm run test`.

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

John Seager, Jan Ayag and Ryan Ho for helping get this project started.

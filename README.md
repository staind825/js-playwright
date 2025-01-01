# DemoQA Playwright Test Framework

This repository contains an automated test framework using Playwright with JavaScript to test the DemoQA website. The framework follows the Page Object Model (POM) design pattern.

## Prerequisites

- Node.js (v14 or higher)
- npm 
- Chrome browser

## Installation

1. Clone the repository:

```bash
git clone https://github.com/staind825/js-playwright.git
cd js-playwright
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests in headed mode (visible browser):

```bash
npm run test:headed
```

Run all tests in headless mode (invisible browser):

```bash
npm run test
```
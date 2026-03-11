# Playwright Sauce Demo Framework

End-to-end UI automation framework for [Sauce Demo](https://www.saucedemo.com/) built with Playwright and TypeScript.

This project uses:

- Playwright Test as the test runner
- Page Object Model for UI interactions
- Custom fixtures to inject page objects into tests
- `dotenv` for environment-based configuration
- HTML and JUnit reports for local runs and CI usage

## Coverage

The current test suite covers the main user flows below:

- Valid login
- Invalid login
- Inventory page validation
- Add item to cart and verify cart contents
- Checkout flow up to step two

The suite runs against:

- Chromium
- Firefox
- WebKit

## Project Structure

```text
.
|-- playwright.config.ts
|-- package.json
|-- src
|   |-- fixtures
|   |   `-- TestFixture.ts
|   `-- pages
|       |-- LoginPage.ts
|       |-- InventoryPage.ts
|       |-- CartPage.ts
|       `-- CheckoutPage.ts
`-- tests
    |-- login.spec.ts
    |-- inventory.spec.ts
    |-- cart.spec.ts
    |-- checkout.spec.ts
    `-- test-1.spec.ts
```

## Requirements

Before running the project, make sure you have:

- Node.js 18 or newer
- npm

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Environment Variables

This project reads runtime settings from `.env`.

Example:

```env
BASE_URL=https://www.saucedemo.com/
SAUCEUSERNAME=standard_user
SAUCEPASSWORD=secret_sauce
```

Variables used by the suite:

- `BASE_URL`: application URL under test
- `SAUCEUSERNAME`: valid Sauce Demo username
- `SAUCEPASSWORD`: valid Sauce Demo password

## Running Tests

Run the full suite:

```bash
npm run test:e2e
```

Run a single spec file:

```bash
npx playwright test tests/login.spec.ts
```

Run only one browser project:

```bash
npx playwright test --project=chromium
```

Run tests by grep tag used in the test title:

```bash
npm run test:smoke
npm run test:regression
```

Open the HTML report after execution:

```bash
npm run report
```

Available npm scripts:

- `npm run test:e2e`: runs the full Playwright suite
- `npm run test:smoke`: runs tests tagged with `@smoke`
- `npm run test:regression`: runs tests tagged with `@regression`
- `npm run report`: opens the Playwright HTML report

## Reports

The framework generates:

- HTML report in `playwright-report/`
- JUnit report in `test-results/results.xml`

These outputs are configured in `playwright.config.ts`.

## GitHub Actions

The repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml`.

The workflow:

- runs on pushes to `main`
- runs on pull requests targeting `main`
- installs dependencies and Playwright browsers
- executes the smoke suite with `npm run test:smoke`
- uploads Playwright and JUnit results as workflow artifacts

This keeps CI fast by validating the tagged smoke path on every change.

## Framework Design

### Page Objects

UI interactions are encapsulated in page object classes under `src/pages/`:

- `LoginPage` handles authentication
- `InventoryPage` handles inventory validations and cart navigation
- `CartPage` handles cart assertions and checkout navigation
- `CheckoutPage` handles checkout form completion

### Custom Fixture Layer

`src/fixtures/TestFixture.ts` extends Playwright's base `test` object and injects page objects into each test. This keeps the specs smaller and avoids repeated object construction in every test file.

Example:

```ts
test('correct login', async ({ page, loginPage }) => {
  await page.goto(process.env.BASE_URL!);
  await loginPage.login(process.env.SAUCEUSERNAME!, process.env.SAUCEPASSWORD!);
});
```

## Notes

- `dotenv` is loaded from the shared fixture and individual specs.
- The current inventory and checkout flow uses Sauce Demo data already present in the site.
- A basic placeholder spec exists in `tests/test-1.spec.ts`.

## Verified Status

The current suite was validated successfully in this workspace and all existing tests passed.
# parcel-optimizer-html-gtm-compatibility

Parcel HTML optimizer that ensures Google Tag Manager compatibility by converting ES6 module scripts (`type="module"`) to traditional scripts (`type="text/javascript"`).

## Installation

```bash
npm install parcel-optimizer-html-gtm-compatibility
```

## Usage

Add to your `.parcelrc`:

```json
{
  "optimizers": {
    "*.html": ["parcel-optimizer-html-gtm-compatibility"]
  }
}
```


### Complete Setup (Bonus)

For a complete Parcel configuration with all optimizers:

```json
{
  "extends": "@parcel/config-default",
  "optimizers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": ["@parcel/optimizer-terser"],
    "*.html": ["parcel-optimizer-html-gtm-compatibility"]
  }
}
```

### Scaffold example, see the `example` directory in the repository.

Use the following command to create a new project:

```bash
npx gitpick ganobrega/parcel-optimizer-html-gtm-compatibility/tree/main/example gtm-tag-example
cd gtm-tag-example
npm install
npm start

# For production use
npm build
```

## Why?

Google Tag Manager may have compatibility issues with ES6 module scripts. This optimizer automatically converts them to traditional scripts for seamless GTM integration.


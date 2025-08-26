# @parcel/optimizer-html-google-tag-manager-compatibility

Parcel HTML optimizer that ensures Google Tag Manager compatibility by converting ES6 module scripts (`type="module"`) to traditional scripts (`type="text/javascript"`).

## Installation

```bash
npm install @parcel/optimizer-html-google-tag-manager-compatibility
```

## Usage

Add to your `.parcelrc`:

```json
{
  "optimizers": {
    "*.html": ["@parcel/optimizer-html-google-tag-manager-compatibility"]
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
    "*.html": ["@parcel/optimizer-html-google-tag-manager-compatibility"]
  }
}
```

## Why?

Google Tag Manager may have compatibility issues with ES6 module scripts. This optimizer automatically converts them to traditional scripts for seamless GTM integration.

# SYSTEM DESIGN

Back to [main README](../../README.md)  
Back to [LibRext Design (Overview)](../design/README.md)

---

## OVERVIEW

...

---

## LIBREXT PACKAGES

### CORE

#### `librext-core` - Core

Functions, constants, and configuration used by several packages throughout the system.

### UI SPECIFICATION

LibRext uses the Theme Specification schema [from System UI](https://system-ui.vercel.app/theme) and [Theme UI](https://theme-ui.com/theme-spec).

#### `librext-ui-spec` - UI Spec

 The `librext-ui-spec` package exports the base UI Spec used by `librext-spec-builder`. This base UI Spec conforms to the Theme Specification mentioned above. 

#### `librext-spec-builder` - Spec Builder

This Spec Builder customizes the UI Spec, overriding values based on configs and adding custom LibRext data to the UI Spec. The rest of the system uses the UI Spec built from here.

### BUILDERS

#### `librext-css-builder` - CSS Builder

Builds CSS files based on the UI Spec from `librext-spec-builder`.

#### `librext-img-builder` - Image Builder

Builds and packages image assets based on the UI Spec from `librext-spec-builder`.

#### `librext-fonts-builder` - Fonts Builder

Packages font files based on the UI Spec from `librext-spec-builder`.

#### `librext-docs-builder` - Docs Builder

Builds style documentation (HTML files) based on the UI Spec from `librext-spec-builder`.

### ETC.

#### `librext-site` - LibRext Website / Docs

The design system's own website and documentation.

---

## LIBREXT MODELS / ENTITIES

### System UI Specification

See [spec details at system-ui.vercel.app](https://system-ui.vercel.app/theme).

### Theme UI Specification

See [spec details at theme-ui.com](https://theme-ui.com/theme-spec).

### LibRext UI Specification

Our own extension of the [Theme UI spec](https://theme-ui.com/theme-spec). The extra data here is tightly coupled to the **Scales**, **Variants**, and **Styles**

---

## LIBREXT OUTPUTS

The LibRext system's outputs complete style kits for a website/document/e-book. A complete LibRext Style Kit will contain:

- HTML files (style documentation & specs)
- CSS stylesheets
- Supporting assets (fonts, icon SVGs, etc)

---

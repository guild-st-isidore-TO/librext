# LibRext

LibRext (Librarium Textuum / Library of Frameworks) is a UI design system and component library developed by the Guild of St. Isidore (TO).

## DOCUMENTATION

Code repository and design docs available [on GitHub](https://github.com/guild-st-isidore-TO/librext)

### Code Documentation

Docs for specific functions or codebase features [can be found here](https://guild-st-isidore-to.github.io/librext/code/).

## USE CASES

LibRext aims to look consistent on ***Print, E-Reader, and Screen***.

### Print

- has bounds

### Screen

- ever-shifting
- interactive
- animations
- tactile feedback

### E-Reader

- something of a blend between the two
- older E-Readers have a long update time and small screens
- more advanced (expensive) ones are bigger, with a quicker refresh rate

## USAGE

LibRext builds a set of global stylesheets. Users can access the styles and design tokens through CSS variables:

```
.widget-set .widget {
    background-color: var(--lbrxt-col-grey4);
    width: 100%;
    margin: 2rem 0;
    text-align: center;
}
```

or HTML class names:

```
<h1 class="lbrxt-title lbrxt-col-grey9">Universal Declaration of Human Rights</h1>
```

## DEVELOPMENT

Quickstart from the repo root:

```
npm install

npm run build

npm run dev
```

### Project Roadmap

If you're interested in what's coming up, you can see the [roadmap here](https://github.com/guild-st-isidore-TO/librext/blob/main/docs/roadmap/README.md)

## DESIGN

Check the [LibRext Design (Overview)](https://github.com/guild-st-isidore-TO/librext/blob/main/docs/design/README.md), or more specific topics:

- [System Design](https://github.com/guild-st-isidore-TO/librext/blob/main/docs/design/system-design.md)
- [Aesthetic Principles](https://github.com/guild-st-isidore-TO/librext/blob/main/docs/design/aesthetic-principles.md)
- [GSI Style Guide v2.0](https://github.com/guild-st-isidore-TO/librext/blob/main/docs/design/gsi-style-guide.md)

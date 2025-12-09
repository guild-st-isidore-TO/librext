# LibRext

LibRext (Librarium Textuum / Library of Frameworks) is a UI design system and component library developed by the Guild of St. Isidore (TO).

> STATUS (VII Decembris MMXXV)  
Active -- High priority, work ongoing

## INSPIRATION

LibRext is inspired primarily by printed texts during the [era of the Incunabula](https://en.wikipedia.org/wiki/Incunable), the [first century after Gutenberg's press](https://www.britannica.com/topic/incunabula) changed Europe and the world. This was a time when old manuscript production methods were giving way to the next phase of bookmaking. New processes were explored, but printmakers were not far from the era of scribes writing huge manuscripts.

**BELOW**: Valerius Maximus. Mainz: Peter Schöffer, 18. kal. Jul. 1471

![Valerius Maximus. Mainz: Peter Schöffer, 18. kal. Jul. 1471](./docs/img/Inkunabel.ValMax.001.jpg "Valerius Maximus. Mainz: Peter Schöffer, 18. kal. Jul. 1471")

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

## DESIGN

Check the [LibRext Design (Overview)](./docs/design/README.md), or more specific topics:

- [System Design](./docs/design/system-design.md)
- [Aesthetic Principles](./docs/design/aesthetic-principles.md)
- [GSI Style Guide v2.0](./docs/design/gsi-style-guide.md)

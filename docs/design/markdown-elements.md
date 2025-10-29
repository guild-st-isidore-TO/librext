# MARKDOWN ELEMENTS

Back to [main README](../../README.md)

Back to [System Design](./system-design.md) 

---

## SPEC

Core HTML elements rendered by Markdown processors, according to https://www.markdownguide.org/basic-syntax/

### Headings

| Element | Markdown | HTML | LibRext |
| --- | --- | --- | --- |
| ... | `#` to `######` | `<h1>` to `<h6>` | `<Heading level="h1">` |

### Body Text

| Element | Markdown | HTML | LibRext |
| --- | --- | --- | --- |
| ... | `content` | `<p>` | `<Paragraph>` |
| ... | `**content**` | `<strong>` | `<Text style="bold">` |
| ... | `_content_` | `<em>` | `<Text style="italic">` |
| ... | \`content\` | `<code>` | `<Text style="monospace">` |

### Formatted Text

| Element | Markdown | HTML | LibRext |
| --- | --- | --- | --- |
| ... | `[Link text](http://www.yerr.ca)` | `<a>` | `<FormatText href="https://www.yerr.on.ca">` |
| Block Quotes | `>` | these can nest | `<FrameText style="quote">` |
| Code Blocks | `\`` | `<pre>` | `<FrameText style="code">` |

### Lists

| Element | Markdown | HTML | LibRext |
| --- | --- | --- | --- |
| ... | `- content` | `<ul>` | `<List>` |
| ... | `1. content` | `<ol>` | `<List ordered="true">` |

### Media

| Element | Markdown | HTML | LibRext |
| --- | --- | --- | --- |
| ... | `![Alt text](http://www.url.ca "Title")` | `<img>` | `<Image>` |
| ... | `---` | `<hr>` | `<HorizRule>` |

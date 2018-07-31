---
title: "Typography"
menu:
  docs:
    title: "Typography"
    weight: 10
    parent: "Style"
---

The PFAS type system borrows heavily from the default Material Design type system. Besides the specific nuances described below, consult the Material Design typography guidelines for what you should do when it comes to setting type.

## Fonts

### Roboto

![Roboto](/img/style/typography/roboto.png)

Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.

Roboto is used in all web and mobile UI, including iOS.

### Merriweather

![Merriweather](/img/style/typography/merriweather.png)

Merriweather was designed to be a text face that is pleasant to read on screens. It features a very large x height, slightly condensed letterforms, a mild diagonal stress, sturdy serifs and open forms.

Merriweather is used on the web (non-UI) and in print, primarily for headings.

## Platform-universal Typography

The PFAS typographic strategy is universal and agnostic to the platform it is applied to. It aims to maintain brand integrity with consistent typefaces that are effective across platforms.

| Platform    | Print                | Web                  | iOS          | Android      | Web App      |
|-------------|----------------------|----------------------|--------------|--------------|--------------|
| Typeface    | Merriweather, Roboto | Merriweather, Roboto | Roboto       | Roboto       | Roboto       |
| Method      | Manual               | @font-face           | @font-face   | @font-face   | @font-face   |
| Color Space | CMYK                 | DCI-P3, sRGB         | DCI-P3, sRGB | DCI-P3, sRGB | DCI-P3, sRGB |

### Print

No set styles. Use Merriweather for large headings and Roboto for text.

### iOS, Android and Web App

Type styles are shared across iOS, Android and Web App. They are derived from Material Design.

![Type styles](/img/style/typography/styles.png)

### Web

On top of the Material Design styles, an additional style with Merriweather is used for large headings.

![Merriweather headings](/img/style/typography/merriweather-headings.png.png)

## Full Typography Table

dp = device-independent pixels (Android) and points (iOS).<br>
R = responsive, i.e. use smaller desktop variant when viewing on larger desktop screens.

| Style | Family | Weight | Size (dp) | Leading (dp) | iOS | Android | Web App | Web | Print |
|------------------------|--------------|---------|----------:|-------------:|:---:|:-------:|:-------:|:---:|:-----:|
| Display 4 | Roboto | Light | 112 | 112 | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Display 3 | Roboto | Regular | 56 | 64 | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Display 2 | Roboto | Regular | 45 | 48 | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Display 1 | Roboto | Regular | 34 | 40 | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Display 1 (web) | Merriweather | Light | 30 | 48 |  |  |  | ✔︎ | ✔︎ |
| Headline | Roboto | Regular | 24 | 32 | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Headline (web) | Merriweather | Regular | 20 | 32 |  |  |  | ✔︎ | ✔︎ |
| Title | Roboto | Medium | 20 | 28 | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Subheading 2 | Roboto | Regular | 16 | 28 | ✔︎ | ✔︎ |  | R | ✔︎ |
| Subheading 2 (desktop) | Roboto | Regular | 15 | 28 |  |  | ✔︎ | R |  |
| Subheading 1 | Roboto | Regular | 16 | 24 | ✔︎ | ✔︎ |  | R | ✔︎ |
| Subheading 1 (desktop) | Roboto | Regular | 15 | 24 |  |  | ✔︎ | R |  |
| Body 2 | Roboto | Medium | 14 | 24 | ✔︎ | ✔︎ |  | R | ✔︎ |
| Body 2 (desktop) | Roboto | Medium | 13 | 24 |  |  | ✔︎ | R |  |
| Body 1 | Roboto | Regular | 14 | 20 | ✔︎ | ✔︎ |  | R | ✔︎ |
| Body 1 (desktop) | Roboto | Regular | 13 | 20 |  |  | ✔︎ | R |  |

## Resources

{{< resource-card class="material" src="https://material.io/design/typography/" title="Typography Guidelines">}}
---
title: "Text Field"
menu:
  docs:
    title: "Text Field"
    weight: 20
    parent: "Components"
toc: true
---

Text fields let users enter and edit text.

Text fields:

- Should stand out and indicate that users can input information
- Should have distinct states
- Should make it easy to understand the requested information and to address any errors

## Anatomy

A text field consists of essential and optional building blocks.

Use leading and trailing icons only in cases where they are required or will greatly enhance usability. Overuse of leading and trailing icons will cause the fields to appear unnecessarily busy.

{{< component-figure src="/img/components/text-field/anatomy.png" >}}
  From left to right: leading icon, label text, input text, trailing icon, suffix (not shown), helper text
{{< /component-figure >}}

---

## Color

Text fields can be white or light gray depending on the background color of their parent containers.

{{< component-figure src="/img/components/text-field/enabled on whisper.png" >}}
  White text field on Whisper background
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/enabled on white.png" style="light" >}}
  Whisper text field on White background
{{< /component-figure >}}

---

## States

{{< component-figure src="/img/components/text-field/enabled on whisper.png" >}}
  Enabled
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/disabled.png" >}}
  Disabled
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/active.png" >}}
  Active
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/filled.png" >}}
  Filled
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/error.png" >}}
  Error
{{< /component-figure >}}

---

### Examples

Here are some examples of various types of text fields you can construct using the system.

{{< component-figure src="/img/components/text-field/password.png" >}}
  Password field with masking toggle and password rules.
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/username.png" >}}
  Username field with availability checker
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/search.png" >}}
  Search field with leading icon
{{< /component-figure >}}

{{< component-figure src="/img/components/text-field/height-weight.png" >}}
  Height and weight fields with suffix
{{< /component-figure >}}
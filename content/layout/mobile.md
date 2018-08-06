---
title: "Mobile"
menu:
  docs:
    title: "Mobile"
    weight: 30
    parent: "Layout"
toc: true
---

PFAS layout whiteframes illustrates how layouts are constructed and serve as a starting point for constructing and adapting to your application-specific layouts. Use the following whiteframes to design layouts for tablet-sized or larger applications.

## Base Whiteframe

The base mobile whiteframe is a typical mobile layout with 16dp margins.

The navigation bar is at zero elevation when the scrolltop of the content is at zero. Thus when the content is not scrolled, the navigation bar has no bottom shadow.

The tabs used in the tab bar are icon + text tabs.

{{% component-figure src="/img/layout/whiteframes/base-mobile.png" %}}
  1. 16dp margins
  2. Back Navigation
  3. Title
  4. Actions
  5. Content Area
  6. Tab Bar
{{% /component-figure %}}

---

## Small-title Variant

When a view has a long title, consider using a large content title, while reducing the size of the title in the navigation bar.

Example, for a task titled “Meet the release date or fix more bugs?”, use "Task" as the navigation bar title and the long title in the content.

{{% component-figure src="/img/layout/whiteframes/base-mobile-variant.png" %}}
  1. Smaller Title
  2. Content Title
{{% /component-figure %}}

---

## Scrolling Behavior

Scrolling content under the navigation causes the elevation of the navigation bar to increase. Imagine sliding a sheet of paper under another sheet causes the top sheet to be raised.

{{% component-figure src="/img/layout/whiteframes/base-mobile-scrolled.png" %}}
  1. Navigation Bar shadow
  2. Scrolled content
{{% /component-figure %}}

{{< vimeo id="283342797" class="video-figure-mobile" autoplay="true" >}}

---

## Resources

{{< resource-card class="invision" src="https://projects.invisionapp.com/d/main#/console/13239558/285764659/inspect" title="Handoff and Assets" >}}
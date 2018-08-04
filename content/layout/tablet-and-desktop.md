---
title: "Tablet and Desktop"
menu:
  docs:
    title: "Tablet and Desktop"
    weight: 20
    parent: "Layout"
toc: true
---

PFAS layout whiteframes illustrates how layouts are constructed and serve as a starting point for constructing and adapting to your application-specific layouts. Use the following whiteframes to design layouts for tablet-sized or larger applications.

## Base Whiteframe

The base tablet/desktop whiteframe is a 12-column layout with 96dp margins and 16dp gutters.

Text is left-aligned to the left-most column with certain parent containers overhanging into the margins. As shown here, the Practera logo, _back_ navigation button and padding of form fields overhang into the margin, to allow text to be flushed left.

The primary content of the page (the form in this example) takes up the width of 8 columns.

{{% component-figure src="/img/layout/whiteframes/base.png" %}}
  1. 96dp margins
  2. 16dp gutters
{{% /component-figure %}}

---

## The Header Bar

{{% component-figure src="/img/layout/whiteframes/base-header-and-app-bar.png" %}}
  1. Product Logo
  2. Project Switcher
  3. Project Sub Navigation
  4. User Navigation
  5. Project Main Navigation
  6. Page Navigation
  7. Page Title
  8. Page Actions
{{% /component-figure %}}

The Header Bar is visible on every page in the app and provides project, user and page-level navigation.

The white area (1 – 5) is reserved for Project and User-level navigation, while the gray area (6 – 8) is reserved for Page-level navigation.

1. **Product Logo** leads to the default page of the application, i.e. the Dashboard.
2. **Project Switcher** is used to switch to a different Project.
3. **User Navigation** opens a menu containing links to User Settings, Account Management and Logout.
5. **Project Main Navigation** provides access to all top-level sections of a Project as a Tab Bar.
6. **Page Navigation** appears in second-level or deeper pages to provide access up the navigation stack.
7. **Page Title** shows the user clearly what page they are on.
8. **Page Action** provides contextual actions specific to the page content below.

---

## Data Table Whiteframe

When the primary content is a single data table, Page Navigation, Page Title and Page Actions are in the data table header.

{{% component-figure src="/img/layout/whiteframes/data-table.png" %}}
  1. Table Title
  2. Table Actions
{{% /component-figure %}}

---

## Resources

{{< resource-card class="invision" src="https://projects.invisionapp.com/d/main#/console/14912436/312662479/inspect" title="Handoff and Assets" >}}
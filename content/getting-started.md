---
title: "Getting Started"
menu:
  docs:
    title: "Getting Started"
    weight: 20
toc: true
---

## Overview

Intersective designers use a variety of tools to facilitate a collaborative workflow. These include:

- Mock-up with [Sketch]
- Mood-boarding and flow prototyping with Invision
- Behavior prototyping in Principle, Flinto or Origami
- Animation in Adobe After Effects and Haiku
- Documentation and research captured in Atlassian, G Suite and Coda
- Shared storage in Dropbox
- Team communication in Slack and Zoom

Note: Make sure you have been properly onboarded and have access to all the above tools and software. Talk to the person you report to.

---

## Setting up your design environment

### 1. Install Sketch and Sketch Runner

Download and install [Sketch](https://www.sketchapp.com/). Obtain company license to activate Sketch. Then install and activate [Sketch Runner](https://sketchrunner.com/). Sketch Runner is like Spotlight/Alfred/Quicksilver for Sketch and is a quick and useful way to quickly execute common commands.

{{< resource-card class="sketch" src="https://www.sketchapp.com/" title="Sketch App">}}

{{< resource-card class="sketchrunner" src="https://sketchrunner.com/" title="Sketchrunner Plugin">}}

### 2. Install Invision Craft

Download and install [Invision Craft](https://www.invisionapp.com/craft). Then use Craft to install the essential Craft plugins.

{{< resource-card class="craft" src="https://www.invisionapp.com/craft" title="Invision Craft">}}

### 3. Install PFAS Tools

[PFAS Tools](https://github.com/aentan/pfas-tools) is an internally-developed Sketch plugin that contains utilities that help speed up your work when designing Practera interfaces.

{{< resource-card class="github" src="https://github.com/aentan/pfas-tools" title="PFAS Tools">}}

### 4. Install essential plugins

These plugins are crucial in our workflow. Install them manually or with Sketch Runner (recommended).

- [PFAS Tools](https://github.com/aentan/pfas-tools)
- [Symbol Organizer](https://github.com/sonburn/symbol-organizer)
- [Library Symbol Replacer](https://github.com/zeroheight/library-symbol-replacer)

### 4. Optional but handy plugins

- [Automate Sketch](https://github.com/Ashung/Automate-Sketch)
- [Find and Replace](https://github.com/thierryc/Sketch-Find-And-Replace/)
- [Rename It](https://github.com/rodi01/RenameIt)
- [Sketch Select](https://github.com/canisminor1990/sketch-select)
- [Sort Me](https://github.com/romashamin/sort-me-sketch)

### 5. Import common shared libraries

Symbols for icons and colors used in the design of all App v1 and later projects reside in common shared libraries.

Locate the [Design – Common Libraries](https://www.dropbox.com/sh/1f1npy4xbhyaw1r/AAATxIW8TPpnQLgWkV-O1cLFa?dl=0) folder in Dropbox.

{{< resource-card class="dropbox" src="https://www.dropbox.com/sh/1f1npy4xbhyaw1r/AAATxIW8TPpnQLgWkV-O1cLFa?dl=0" title="Common Libraries Folder">}}

Import the following libraries into Sketch, in order.

1. Intersective Colors.sketch
2. Intersective Icons.sketch

![Sketch Libraries Panel](/img/getting-started/libraries.png)

Go to Preferences > Libraries and click on Add Library.

### 6. Import Master Component Library

{{< resource-card class="sketch" src="https://www.dropbox.com/s/7smyxc61uwtgvyq/PFAS%20Master.sketch?dl=0" title="PFAS Master Library">}}

---

## Working on existing Sketch files

Make sure you've set up your design environment.

Only 1 person should work on a Sketch file at a time. Pay attention to Dropbox notifications about edits to know if somebody is actively editing something. Also you can check the Recent Files log.

![Dropbox Recent Files](/img/getting-started/dropbox-recent.png)

---

## Creating new Sketch files

All design Sketch files need to reference Symbols and, text and layer styles from the Master library.

To do this:

### 1. Create New Sketch Document

This is just your regular `⌘ + N` to create your new file.

### 2. Use Symbols

Use the Symbol menu to insert symbols from the PFAS Master library.

![Using Symbols](/img/getting-started/use-symbols.png)

If you copy and paste screens or layers from a library into another Sketch file, symbols will be duplicated into the Symbols page of your other file. To fix this you will need to use the _Library Symbol Replacer plugin_.

Watch this screencast to see how it works.

{{< vimeo 282561955 >}}
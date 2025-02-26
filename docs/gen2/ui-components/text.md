---
title: Textual elements
sidebar_position: 1
image: /img/rayfield/rayfield.png
description: How to create textual elements
---

# Textual elements in Rayfield

## Creating a Label

```lua
local Label = Tab:CreateLabel("Label Example", 4483362458, Color3.fromRGB(255, 255, 255), false) -- Title, Icon, Color, IgnoreTheme
```

### Lucide Icon Support
You can now also use Lucide Icons with Rayfield.
To do so, replace the Image Id above `4483362458` with a string value of an icon name in Lucide Icons.

```lua
local Label = Tab:CreateLabel("Label Example", "rewind")
```

This will set the icon to a rewind symbol from Lucide Icons.

[All Lucide Icons](https://lucide.dev/icons/) 
[Supported Lucide Icons](https://github.com/latte-soft/lucide-roblox/tree/master/icons/compiled/48px)

Credit to [Lucide](https://lucide.dev/) and [Latte Softworks](https://github.com/latte-soft/)

### Updating a Label

```lua
Label:Set("Label Example", 4483362458, Color3.fromRGB(255, 255, 255), false) -- Title, Icon, Color, IgnoreTheme
```

## Creating a Paragraph

```lua
local Paragraph = Tab:CreateParagraph({Title = "Paragraph Example", Content = "Paragraph Example"})
```

### Updating a Paragraph

```lua
Paragraph:Set({Title = "Paragraph Example", Content = "Paragraph Example"})
```

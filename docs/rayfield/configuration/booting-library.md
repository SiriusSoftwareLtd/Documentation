---
title: Booting the Library
sidebar_position: 2
image: /img/rayfield/rayfield.png
description: How to boot the Rayfield Library
---

## Loading the Rayfield Library

```lua
local Rayfield = loadstring(game:HttpGet('https://sirius.menu/rayfield'))()
```

### Enabling Configuration Saving

:::tip

1. Enable ConfigurationSaving in the CreateWindow function
2. Choose an appropiate FileName in the CreateWindow function
3. Choose an unique flag identifier for each supported element you create
4. Place `Rayfield:LoadConfiguration()` at the bottom of all your code

:::
Rayfield will now automatically save and load your configuration

---
title: Binds
sidebar_position: 3
image: /img/rayfield/rayfield.png
description: How to create keybinds
---

# Binding keys in Rayfield

## Creating a Keybind

```lua
local Keybind = Tab:CreateKeybind({
   Name = "Keybind Example",
   CurrentKeybind = "Q",
   HoldToInteract = false,
   Flag = "Keybind1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Keybind)
   -- The function that takes place when the keybind is pressed
   -- The variable (Keybind) is a boolean for whether the keybind is being held or not (HoldToInteract needs to be true)
   end,
})
```

### Updating a Keybind

```lua
Keybind:Set("RightCtrl") -- Keybind (string)
```

---
title: Windows
sidebar_position: 3
image: /img/rayfield/rayfield.png
description: Windows. Rayfield Gen2.
---

# Windows and Tabs

## Creating a Window
```lua
local Window = Rayfield:CreateWindow({
   Name = 'Rayfield Gen2 Script',
   Icon = 0, -- Icon in Topbar. Can use Lucide Icons (string) or Roblox Image (number). 0 to use no icon (default).
   Theme = 'Default', -- Check https://docs.sirius.menu/rayfield/configuration/themes

   DisableRayfieldPrompts = false,
   DisableBuildWarnings = false, -- Prevents Rayfield from warning when the script has a version mismatch with the interface

   Configurations = {
      Enabled = true,
      Folder = nil, -- Create a custom folder for your hub/game
      File = 'Script Name'
   },
})
```

## Creating a Tab
```lua
local Tab = Window:CreateTab({
   Name = 'Tab Name',
   Icon = 0,
   Etc = 'more stuff idk,
}) -- Title, Image
```


### Hiding a Window
```lua
Window:Hide()
```

### Showing a Window
```lua
Window:Show()
```

### Removing a Window
```lua
Window:Destroy()
```

### Adding custom elements to a Window
```lua
Window:Create({

})
```




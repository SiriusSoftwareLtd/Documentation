---
title: Windows
sidebar_position: 3
image: /img/rayfield/rayfield.png
description: How to create a window
---

# Windows in Rayfield

## Creating a Window

```lua
local Window = Rayfield:CreateWindow({
   Name = "Rayfield Example Window",
   Icon = 0, -- Icon in Topbar. Can use Lucide Icons (string) or Roblox Image (number). 0 to use no icon (default).
   LoadingTitle = "Rayfield Interface Suite",
   LoadingSubtitle = "by Sirius",
   ShowText = "Rayfield", -- for mobile users to unhide rayfield, change if you'd like
   Theme = "Default", -- Check https://docs.sirius.menu/rayfield/configuration/themes

   ToggleUIKeybind = "K", -- The keybind to toggle the UI visibility (string like "K" or Enum.KeyCode)

   DisableRayfieldPrompts = false,
   DisableBuildWarnings = false, -- Prevents Rayfield from warning when the script has a version mismatch with the interface

   ConfigurationSaving = {
      Enabled = true,
      FolderName = nil, -- Create a custom folder for your hub/game
      FileName = "Big Hub"
   },

   Discord = {
      Enabled = false, -- Prompt the user to join your Discord server if their executor supports it
      Invite = "noinvitelink", -- The Discord invite code, do not include discord.gg/. E.g. discord.gg/ ABCD would be ABCD
      RememberJoins = true -- Set this to false to make them join the discord every time they load it up
   },

   KeySystem = false, -- Set this to true to use our key system
   KeySettings = {
      Title = "Untitled",
      Subtitle = "Key System",
      Note = "No method of obtaining the key is provided", -- Use this to tell the user how to get a key
      FileName = "Key", -- It is recommended to use something unique as other scripts using Rayfield may overwrite your key file
      SaveKey = true, -- The user's key will be saved, but if you change the key, they will be unable to use your script
      GrabKeyFromSite = false, -- If this is true, set Key below to the RAW site you would like Rayfield to get the key from
      Key = {"Hello"} -- List of keys that will be accepted by the system, can be RAW file links (pastebin, github etc) or simple strings ("hello","key22")
   }
})
```

## Creating a Tab

```lua
local Tab = Window:CreateTab("Tab Example", 4483362458) -- Title, Image
```


### Lucide Icon Support
You can now also use Lucide Icons with Rayfield.
To do so, replace the Image Id above `4483362458` with a string value of an icon name in Lucide Icons.

```lua
local Tab = Window:CreateTab("Tab Example", "rewind")
```

This will set the Tab icon to a rewind symbol from Lucide Icons.

[All Lucide Icons](https://lucide.dev/icons/) 
[Supported Lucide Icons](https://github.com/latte-soft/lucide-roblox/tree/master/icons/compiled/48px)

Credit to [Lucide](https://lucide.dev/) and [Latte Softworks](https://github.com/latte-soft/)

## Creating a Section

```lua
local Section = Tab:CreateSection("Section Example")
```

### Updating a Section

```lua
Section:Set("Section Example")
```

## Creating a Divider

```lua
local Divider = Tab:CreateDivider()
```

### Updating a Divider

```lua
Divider:Set(false) -- Whether the divider's visibility is to be set to true or false.
```

## Changing the Interface's Visibility

### Setting the Visibility

```lua
Rayfield:SetVisibility(false)
```

### Getting the Visibility

```lua
Rayfield:IsVisible()
```

## Destroying the Interface

```lua
Rayfield:Destroy()
```

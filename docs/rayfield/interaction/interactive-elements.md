---
title: Elements
sidebar_position: 1
image: /img/rayfield/rayfield.png
description: How to create interactive elements
---

# Adding interactive elements

## Notifying the user

```lua
Rayfield:Notify({
   Title = "Notification Title",
   Content = "Notification Content",
   Duration = 6.5,
   Image = 4483362458,
})
```

### Lucide Icon Support
You can now also use Lucide Icons with Rayfield.
To do so, replace the Image Id above `4483362458` with a string value of an icon name in Lucide Icons.

```lua
Rayfield:Notify({
   Title = "Notification Title",
   Content = "Notification Content",
   Duration = 6.5,
   Image = "rewind",
})
```

This will set the icon to the Lucide Icons rewind symbol.

[All Lucide Icons](https://lucide.dev/icons/) 
[Supported Lucide Icons](https://github.com/latte-soft/lucide-roblox/tree/master/icons/compiled/48px)

Credit to [Lucide](https://lucide.dev/) and [Latte Softworks](https://github.com/latte-soft/)

## Creating a Button

```lua
local Button = Tab:CreateButton({
   Name = "Button Example",
   Callback = function()
   -- The function that takes place when the button is pressed
   end,
})
```

### Updating a Button

```lua
Button:Set("Button Example")
```

## Creating a Toggle

```lua
local Toggle = Tab:CreateToggle({
   Name = "Toggle Example",
   CurrentValue = false,
   Flag = "Toggle1", -- A flag is the identifier for the configuration file; make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Value)
   -- The function that takes place when the toggle is pressed
   -- The variable (Value) is a boolean on whether the toggle is true or false
   end,
})
```

### Updating a Toggle

```lua
Toggle:Set(false)
```

## Creating a Color Picker

```lua
local ColorPicker = Tab:CreateColorPicker({
    Name = "Color Picker",
    Color = Color3.fromRGB(255,255,255),
    Flag = "ColorPicker1", -- A flag is the identifier for the configuration file; make sure every element has a different flag if you're using configuration saving to ensure no overlaps
    Callback = function(Value)
        -- The function that takes place every time the color picker is moved/changed
        -- The variable (Value) is a Color3fromRGB value based on which color is selected
    end
})
```

### Updating a Color Picker

```lua
ColorPicker:Set(Color3.fromRGB(255,255,255)
```

## Creating a Slider

```lua
local Slider = Tab:CreateSlider({
   Name = "Slider Example",
   Range = {0, 100},
   Increment = 10,
   Suffix = "Bananas",
   CurrentValue = 10,
   Flag = "Slider1", -- A flag is the identifier for the configuration file; make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Value)
   -- The function that takes place when the slider changes
   -- The variable (Value) is a number that correlates to the value the slider is currently at
   end,
})
```

### Updating a Slider

```lua
Slider:Set(10) -- The new slider integer value
```

## Creating an Adaptive Input (TextBox)

```lua
local Input = Tab:CreateInput({
   Name = "Input Example",
   CurrentValue = "",
   PlaceholderText = "Input Placeholder",
   RemoveTextAfterFocusLost = false,
   Flag = "Input1",
   Callback = function(Text)
   -- The function that takes place when the input is changed
   -- The variable (Text) is a string for the value in the text box
   end,
})
```

### Updating an Adaptive Input (TextBox)

```lua
Input:Set("New Text") -- The new input text value
```

## Creating a Dropdown menu

```lua
local Dropdown = Tab:CreateDropdown({
   Name = "Dropdown Example",
   Options = {"Option 1", "Option 2"},
   CurrentOption = {"Option 1"},
   MultipleOptions = false,
   Flag = "Dropdown1", -- A flag is the identifier for the configuration file; make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Options)
   -- The function that takes place when the selected option is changed
   -- The variable (Options) is a table of strings for the current selected options
   end,
})
```

### Updating a Dropdown

You can update the dropdown's option list using `Dropdown:Refresh()`.
```lua
Dropdown:Refresh({"New Option 1","New Option 2"}) -- The new list of options
```

Set the dropdown's currently selected option(s) using `Dropdown:Set()`. The option table can include multiple strings if you set MultipleOptions to true when creating the dropdown.
```lua
Dropdown:Set({"Option 2"}) -- "Option 2" will now be selected
```

:::note
The dropdown's callback function is called when you use the Dropdown:Set() method.
:::

## Check the value of an existing element

To check the value of an existing element, use `ElementName.CurrentValue`. If the element is a keybind or a dropdown, you need to use `KeybindName.CurrentKeybind` or `DropdownName.CurrentOption` respectively.
You can also check it via the flags from `Rayfield.Flags`.

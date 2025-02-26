---
title: Elements
sidebar_position: 1
image: /img/rayfield/rayfield.png
description: How to create interactive elements
---

# Adding interactive elements



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


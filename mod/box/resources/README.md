## Resources

All resources are auto-loaded and places
on the scene accordingly to their
file names and location on the file system.

By convention, resources go into /res 
and subfolders. But not necessary so.
You can place them anywhere,
if that makes sense within your
game conventions.

So, for example, you can create
the following file structure
and it will be reflected on the scene:

```
root
  |
  |--/res - you can place all the common resources here
  |    |
  |    |-- sfx - common sounds effects
  |    |-- msg - common text messages
  |    |-- sprites - all sprite sheets
  |--/lvl - level data goes here
       |
       |--/level1 - level 1 data
       |     |--/res - level 1 resources
       |     |    |--/sfx - level 1 specific sound effects
       |     |--layout.json - level 1 map
       |--/level2
       |
       |...
```

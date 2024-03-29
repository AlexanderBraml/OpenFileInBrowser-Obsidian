# Open Files in a web browser
Allows the user to open the currently open file in any web browser.  
**This is not an example of good practice or clean code.** I have little to none experience with typescript, so I just hacked this together.

## Usage
Open a file (preferably a pdf-file) and click on the little paper plane on the left of Obsidian. This will open the currently open file in a new tab in the specified browser.
![demo.gif](https://github.com/Alexander-Braml/ObsidianPlugin-OpenInEdge/raw/master/demo.gif)

## How to adjust to your needs
First of all, fork this repository. Then follow [this guide](https://github.com/obsidianmd/obsidian-sample-plugin#first-time-developing-plugins) to set everything up and compile the plugin.  
You can change the program with which the file is opened by changing the `app_`-Variable in `main.ts:29`. Just make sure the command works when typed into a terminal.

## Why?
This is a plugin for a very specific usecase. It won't be useful for many, but for the few who have the same problem as me: Here you go.  
My background: I am a student in Germany. I have lots of pdf files with assignments, notes and other things. Often times I need to have multiple files open in different windows. I use my main PDF program to edit the pdfs and my web browser to just display files. Unfortunately, Obsidian only allows you to open files in your default app. I always had to right click on the file, show it in system explorer and then open it with my browser. This was tedious and took a lot of time. Now I can just click on the ribbon icon and the file opens in my web browser.

## Further reference
For further reference, please visit [github.com/obsidianmd](https://github.com/obsidianmd) or [obsidian.md](https://obsidian.md/).

## Issues
If you encounter any issues please to contact me. I will try to help.  
I won't develop this any further, but feel free to enhance it on your own.

### July 2022 Update
As there are pop-out windows now, you might not need this plugin anymore. Just open your pdfs in a new window.

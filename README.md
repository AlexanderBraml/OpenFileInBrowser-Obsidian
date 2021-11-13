# Open Files in Microsoft Edge
Allows the user to open the currently open file in Microsoft Edge.
Of course, the plugin can be changed by devs to be used with different applications. See "How to adjust" below.
**This is not an example of good practice or clean code.** I am mostly a Java/Python/Kotlin-Developer with little to none experience with typescript. I just hacked this together.

## Usage
Open a file (preferably a pdf-file) and click on the little paper plane on the left of Obsidian. This will open the currently open file in a new tab in Microsoft Edge.

## How to adjust to your needs
First of all, fork this repository. Then follow [this guide](https://github.com/obsidianmd/obsidian-sample-plugin#first-time-developing-plugins) to set everything up and compile the plugin.
You can change the program with which the file is opened by changing the `app_`-Variable in `main.ts:29`. Just make sure the command is found when typed into a terminal.

## Why?
This is a plugin for a very specific usecase, I know. It won't be useful for many, but for the few who have the same problem as me: Here you go.
My background: I am a student in Germany. I have lots of pdf files with assignments, notes and other things. Often times I need to have multiple files open in different windows. I use my main PDF program to edit the pdfs and ms edge to just display files. Unfortunately, Obsidian only allows you to open files in your default app. I always had to right click on the file, show it in system explorer and then open it with edge. This was tedious and took a lot of time. Now I can just click on the ribbon icon and the file opens in edge.

## Further reference
For further reference, please visit [github.com/obsidianmd](https://github.com/obsidianmd) or [obsidian.md](https://obsidian.md/).

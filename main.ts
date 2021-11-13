import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, normalizePath, TFile, Platform, Workspace } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.openFileInEdge(this.app.workspace.getActiveFile());
			// new Notice(cmd);
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	openFileInEdge(file: TFile) {
		var path = this.getAbsolutePathOfFile(file);
		var cmd = "start msedge \"" + path + "\"";
		const { exec } = require("child_process");
		exec(cmd);
	}

	getAbsolutePathOfFile(file: TFile): string {
		//@ts-ignore
		const path = normalizePath(`${this.app.vault.adapter.basePath}/${file.path}`)
		if (Platform.isDesktopApp && navigator.platform === "Win32") {
			return path.replace(/\//g, "\\");
		}
		return path;
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

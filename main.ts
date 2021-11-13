import { Plugin, normalizePath, TFile, Platform } from 'obsidian';

export default class OpenInEdgePlugin extends Plugin {

	async onload() {

		const ribbonIconEl = this.addRibbonIcon('paper-plane', 'Open File In Edge', (evt: MouseEvent) => {
			this.openFileInEdge(this.app.workspace.getActiveFile());
		});
		ribbonIconEl.addClass('open-in-edge-ribbon-class');

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
		// adjust app to your needs, just make sure the command it works in a terminal
		var app_ = "start msedge";
		var cmd = app_ + " \"" + path + "\"";
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
}

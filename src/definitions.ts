declare module '@capacitor/core' {
	interface PluginRegistry {
		TtsPlugin: TtsPluginPlugin;
	}
}

export interface TtsPluginPlugin {
	speak(options: { speakText: string }): Promise<string>;
}

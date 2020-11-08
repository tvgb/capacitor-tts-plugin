declare module '@capacitor/core' {
	interface PluginRegistry {
		TtsPlugin: TtsPluginPlugin;
	}
}

export interface TtsPluginPlugin {
	speak(options: Options): Promise<any>;
}

export interface Options {
	text: string;
	locale?: string;
	rate?: number;
	cancel?: boolean;
}

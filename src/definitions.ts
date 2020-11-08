declare module '@capacitor/core' {
	interface PluginRegistry {
		TtsPlugin: TtsPluginPlugin;
	}
}

export interface TtsPluginPlugin {
	speak(options: Options): Promise<void>;
}

export interface Options {
	text: string;
	locale?: string;
	rate?: number;
	cancel?: boolean;
}

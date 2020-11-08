declare module '@capacitor/core' {
	interface PluginRegistry {
		CapacitorTtsPlugin: ICapacitorTtsPlugin;
	}
}

export interface ICapacitorTtsPlugin {
	speak(options: Options): Promise<void>;
}

export interface Options {
	text: string;
	locale?: string;
	rate?: number;
	cancel?: boolean;
}

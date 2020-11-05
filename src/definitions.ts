declare module '@capacitor/core' {
	interface PluginRegistry {
		TtsPlugin: TtsPluginPlugin;
	}
}

export interface TtsPluginPlugin {
	echo(options: { value: string }): Promise<{ value: string }>;
	getContacts(filter: string): Promise<{results: any[]}>;
}

export interface CapacitorTtsPlugin {
	speak(options: Options): Promise<void>;
	stopSpeaking(): Promise<void>;
}

export interface Options {
	text: string;
	locale?: string;
	rate?: number;
	cancel?: boolean;
}

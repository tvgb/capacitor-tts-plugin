import { WebPlugin } from '@capacitor/core';
import type { CapacitorTtsPlugin, Options } from './definitions';

export class CapacitorTtsPluginWeb extends WebPlugin implements CapacitorTtsPlugin {
	async speak(options: Options): Promise<void> {
		console.log(`TTS: ${options.text}`);
		return;
	}

	async stopSpeaking(): Promise<void> {
		console.log('Stopped tts');
		return;
	}
}

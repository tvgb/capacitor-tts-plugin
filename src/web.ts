import {  WebPlugin } from '@capacitor/core';
import { CapacitorTtsPlugin, Options } from './definitions';

export class CapacitorTtsPluginWeb extends WebPlugin implements CapacitorTtsPlugin {
	constructor() {
		super({
			name: 'CapacitorTtsPlugin',
			platforms: ['web'],
		});
	}

	async speak(options: Options): Promise<void> {
		console.log(`TTS: ${options.text}`);
		return;
	}

	async stopSpeaking(): Promise<void> {
		console.log('Stopped tts');
		return;
	}
}

const CapacitorTts = new CapacitorTtsPluginWeb();

export { CapacitorTts };

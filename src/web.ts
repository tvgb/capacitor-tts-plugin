import { WebPlugin } from '@capacitor/core';
import { ICapacitorTtsPlugin, Options } from './definitions';

export class CapacitorTtsPluginWeb extends WebPlugin implements ICapacitorTtsPlugin {
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
		console.log('Stopped tts')
		return;
	}
}

const CapacitorTtsPlugin = new CapacitorTtsPluginWeb();

export { CapacitorTtsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorTtsPlugin);

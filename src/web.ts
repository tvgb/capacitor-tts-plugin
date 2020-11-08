import { WebPlugin } from '@capacitor/core';
import { TtsPluginPlugin, Options } from './definitions';

export class TtsPluginWeb extends WebPlugin implements TtsPluginPlugin {
	constructor() {
		super({
			name: 'TtsPlugin',
			platforms: ['web'],
		});
	}

	async speak(options: Options): Promise<any> {
		console.log(`TTS: ${options.text}`);
		return;
	}
}

const TtsPlugin = new TtsPluginWeb();

export { TtsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TtsPlugin);

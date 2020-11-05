import { WebPlugin } from '@capacitor/core';
import { TtsPluginPlugin } from './definitions';

export class TtsPluginWeb extends WebPlugin implements TtsPluginPlugin {
	constructor() {
		super({
			name: 'TtsPlugin',
			platforms: ['web'],
		});
	}
	  
	async speak(options: { speakText: string }): Promise<string> {
		console.log(`App would have said: ${options.speakText}`);
		return 'lol';
	}
}

const TtsPlugin = new TtsPluginWeb();

export { TtsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TtsPlugin);

import { WebPlugin } from '@capacitor/core';
import { TtsPluginPlugin } from './definitions';

export class TtsPluginWeb extends WebPlugin implements TtsPluginPlugin {
	constructor() {
		super({
			name: 'TtsPlugin',
			platforms: ['web'],
		});
  	}

	async echo(options: { value: string }): Promise<{ value: string }> {
		console.log('ECHO', options);
		return options;
	}

	async getContacts(filter: string): Promise<{ results: any[] }> {
		console.log('filter: ', filter);
		return {
			results: [{
				firstName: 'Ola',
				lastName: 'Halvorsen',
				telephone: '09776969'
			}]
		};
	}
}

const TtsPlugin = new TtsPluginWeb();

export { TtsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TtsPlugin);

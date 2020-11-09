# capacitor-tts-plugin
Capacitor plugin for text to speech for iOS. (and soon Android)

[![NPM Version][npm-image]][npm-url]

## Platforms
iOS 11+

## Install

```bash
npm install capacitor-tts-plugin
```

## Usage
```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-tts-plugin';

const { CapacitorTtsPlugin } = Plugins;


options = {
	text: 'Hello world', // Text to be said
	locale?: 'en-GB', // Language, en-GB is default (optional)
	rate?: 0.5, // Rate of speech, 0.5 is default (optional)
	cancel?: true // If true, cancels earlier speak commands. True is default (optional)
}

CapacitorTtsPlugin.speak(options).then(() => {
	// Do stuff when speaking has finished
	console.log('Speaking finished!');

}).catch((error) => {
	// Something went wrong while speaking
	console.log(error);
})
```

## Available function calls
```typescript
/** Promise resolves when speaking has finished */
function speak(options: Options): Promise<void>; 

/** Promise resolves when current speaking has been stopped or if no current speaking was detected. */
function stopSpeaking(): Promise<void>:
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/capacitor-tts-plugin.svg
[npm-url]: https://www.npmjs.com/package/capacitor-tts-plugin

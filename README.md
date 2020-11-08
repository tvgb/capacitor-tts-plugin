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

const { TtsPlugin } = Plugins;


options = {
	text: 'Hello world', // Text to be said
	locale?: 'en-GB', // Language (optional)
	rate?: 0.5, // Rate of speech, 0.5 is default (optional)
	cancel?: true // If true, cancels earlier speak commands (optional)
}

TtsPlugin.speak(options);
```

## Available function calls
```typescript
function speak(options: Options): Promise<void>;
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/capacitor-tts-plugin.svg
[npm-url]: https://www.npmjs.com/package/capacitor-tts-plugin

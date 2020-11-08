# capacitor-tts-plugin

> ${DESCRIPTION}

[![NPM Version][npm-image]][npm-url]

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
function speak(options: Options): 
```

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master

# Capacitor Text-To-Speech plugin
Capacitor plugin for text to speech for iOS and Android.

## Platforms
iOS 11+
Android 10+

Other versions may also work, but these two are the only ones that have been tested.

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

CapacitorTtsPlugin.stopSpeaking().then(() => {
	// Do stuff when speaking has been stopped
	console.log('Speaking stopped!');
}).catch((error) => {
	// Could not stop speaking
	console.log(error);
})
```

## Extra step for Android
After install plugin with npm install, the plugin must be imported and added to android\app\src\main\java\YourProjectName\MainActivity.java.
```java
import com.tvgb.cpt.CapacitorTtsPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorTtsPlugin.class);
    }});
  }
}
```

## Available function calls
```typescript
/** Promise resolves when speaking has finished */
function speak(options: Options): Promise<void>; 

/** Promise resolves when current speaking has been stopped or if no current speaking was detected. */
function stopSpeaking(): Promise<void>:
```



## Issues?
Feature requests? Missing documentation? Something not working as intended or any other issues? Post a new issue on [Github][github-issues-url]!

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/capacitor-tts-plugin.svg
[npm-url]: https://www.npmjs.com/package/capacitor-tts-plugin
[github-issues-url]: https://github.com/tvgb/capacitor-tts-plugin/issues

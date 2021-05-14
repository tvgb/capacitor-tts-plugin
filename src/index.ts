import { registerPlugin } from '@capacitor/core';
import type { CapacitorTtsPlugin } from './definitions';
import { CapacitorTtsPluginWeb } from './web';

const CapacitorTts = registerPlugin<CapacitorTtsPlugin>('CapacitorTts', {
  web: () => new CapacitorTtsPluginWeb(),
});

export * from './definitions';
export { CapacitorTts };

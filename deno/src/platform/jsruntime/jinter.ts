import { Jinter } from 'https://esm.sh/jintr';
import type { VMPrimative } from '../../types/PlatformShim.ts';
import { Log } from '../lib.ts';

const TAG = 'JsRuntime';

export default function evaluate(code: string, env: Record<string, VMPrimative>) {
  Log.debug(TAG, 'Evaluating JavaScript:\n', code);

  const runtime = new Jinter(code);

  for (const [ key, value ] of Object.entries(env)) {
    runtime.scope.set(key, value);
  }

  const result = runtime.interpret();

  Log.debug(TAG, 'Done. Result:', result);

  return result;
}
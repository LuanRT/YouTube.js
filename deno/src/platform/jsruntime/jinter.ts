import { Jinter } from 'https://esm.sh/jintr';
import type { VMPrimative } from '../../types/PlatformShim.ts';

export default function evaluate(code: string, env: Record<string, VMPrimative>) {
  const runtime = new Jinter(code);
  for (const [ key, value ] of Object.entries(env)) {
    runtime.scope.set(key, value);
  }
  return runtime.interpret();
}
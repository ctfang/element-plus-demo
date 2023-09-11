import { CompilerOptions } from '@vue@3.3.4/compiler-dom';
import { RenderFunction } from '@vue@3.3.4/runtime-dom';
export * from '@vue@3.3.4/runtime-dom';

export declare function compileToFunction(template: string | HTMLElement, options?: CompilerOptions): RenderFunction;

export { compileToFunction as compile };
// this is appended to the end of ../dist/vue@3.3.4.d.ts during build.
// imports the global JSX namespace registration for compat.
// TODO: remove in 3.4
import '../jsx'

import RnCoreComponent from './NativeRnCoreComponent';
import DefaultActionBar, {
  type DefaultActionBarProps,
  type DefaultActionBarRef,
} from './DefaultActionBar';

export function multiply(a: number, b: number): number {
  return RnCoreComponent.multiply(a, b);
}
export { DefaultActionBar };
export type { DefaultActionBarProps, DefaultActionBarRef };

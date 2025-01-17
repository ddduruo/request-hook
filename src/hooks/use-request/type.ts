import { Ref } from '@vue/composition-api';

export interface Options {
  manaul?: boolean;
  onSuccess?: (result: any, params?: any) => void;
  pollingInterval?: number;
  pollingWhenHidden?: boolean;
  debounceInterval?: number;
  throttleInterval?: number;
}

export interface PollingRequest {
  data: Ref<any>;
  run: () => void;
  cancel: () => void;
  loading: Ref<boolean>;
}

export type Request<T extends unknown[],U> = (...arr: T) => Promise<U>
export interface Params {
  // TODO: 如何让initalData继承请求的返回值？
  // 可以看下ahooks是否支持
  initialData?: any;
  manaul?: boolean;
  pollingInterval?: number
}

export interface requestFactor {
  start: () => 
}

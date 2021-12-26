import { Ref } from '@vue/runtime-dom'

export interface GeolocationOptions
  extends Partial<PositionOptions>
/**
 * @param options
 */

export declare function useGeolocation(options?: GeolocationOptions): {
  isSupported: boolean | undefined
  coords: Ref<GeolocationCoordinates>
  locatedAt: Ref<number | null>
  message: Ref<String | null>
  error: Ref<{
    readonly code: number
    readonly message: string
    readonly PERMISSION_DENIED: number
    readonly POSITION_UNAVAILABLE: number
    readonly TIMEOUT: number
  } | null>
}
export declare type UseGeolocationReturn = ReturnType<typeof useGeolocation>

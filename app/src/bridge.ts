import { Registry } from 'lepont'
import { TYPE_0, Payload0 } from './shared'

export const <%= exportName %> = () => (registry: Registry) => {
  registry.register(
    TYPE_0,
    async (payload: Payload0) => {
    }
  )
}

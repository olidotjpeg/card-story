import { readable, type Readable } from 'svelte/store'

export function useState<T>(initValue: T) {
  let setValue: (value: T) => void

  const nameStore: Readable<T> = readable(initValue, set => {
    setValue = set
  })

  nameStore.subscribe(_ => {})

  return [nameStore, setValue]
}

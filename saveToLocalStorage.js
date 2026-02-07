import { arr } from './mainSource.js'
import { times } from './mainSource.js'


export function saveToLocalStorage() {
  localStorage.setItem("Value", JSON.stringify(arr));
  localStorage.setItem('Time', JSON.stringify(times))
}
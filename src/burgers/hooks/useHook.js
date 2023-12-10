import { useEffect, useState } from "react"


export const useHook = (url) => {
  const [Items, setItems] = useState([])
  useEffect(() => {
  fetch(url)
  .then(Response => Response.json())
  .then(data=>setItems(data))
}, [])

  return {
    Items
  }
}

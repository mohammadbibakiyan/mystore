import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Portal= ({ children }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted? createPortal(<div className="fixed top-0 left-0 w-full h-full backdrop-filter backdrop-brightness-50 backdrop-blur-sm">
      <div className="absolute w-full sm:w-2/3 bg-white rounded-xl p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">{children}</div>
      </div>, document.getElementById("overlays")): null
}

export default Portal
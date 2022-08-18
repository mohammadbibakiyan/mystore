import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Portal= (props) => {
   const [mounted, setMounted] = useState(false);
   useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
   }, [])

   return mounted? createPortal(<div  className="fixed top-0  left-0 w-full h-full backdrop-filter backdrop-brightness-50 backdrop-blur-sm z-40" onClick={props.closeHandler}>
      <div className={`absolute ${props.className} max-h-screen overflow-y-scroll  bg-white rounded-xl p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `} onClick={e=>e.stopPropagation()}>{props.children}</div>
      </div>, document.getElementById("overlays")): null
}

export default Portal;
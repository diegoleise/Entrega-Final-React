import { useRef } from "react"


function CheckOutSideClick  (props)  {
  const ref = useRef(null);
  const {CheckOutSideClick, children} = props;
  if(!children)  {
    return null;
  }
  return (
    <div ref = {ref} >{children}</div>
  )
}

export default CheckOutSideClick
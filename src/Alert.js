import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  // type is either 'success' or 'danger' used for dynamic styling
  useEffect(()=> {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 2000)
    return () => clearTimeout(timeout)
  }, [list]) 

  return <p className={`alert alert-${type}`}>
    {msg}
  </p>
}

export default Alert

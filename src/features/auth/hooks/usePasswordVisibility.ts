import { useState } from 'react'

export function usePasswordVisibility() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((value) => !value)
  }

  return {
    isPasswordVisible,
    togglePasswordVisibility,
  }
}

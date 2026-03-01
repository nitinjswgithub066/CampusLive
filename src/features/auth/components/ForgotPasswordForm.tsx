import React from 'react'
import { View } from 'react-native'
import ForgotPasswordEmail from '@features/auth/components/ForgotPasswordEmail'
import ForgotPasswordOtp from '@features/auth/components/ForgotPasswordOtp'
import NewPaswordCreate from '@features/auth/components/NewPaswordCreate'
import useForgotPassword from '@features/auth/hooks/useForgotPassword'

const ForgotPasswordForm = () => {
  // ── Single hook instance — passed down to all 3 steps ──
  // Same singleton pattern as RegisterForm
  const hook = useForgotPassword()

  return (
    <View>
      {hook.currentStep === 1 && <ForgotPasswordEmail hook={hook} />}
      {hook.currentStep === 2 && <ForgotPasswordOtp hook={hook} />}
      {hook.currentStep === 3 && <NewPaswordCreate hook={hook} />}
    </View>
  )
}

export default ForgotPasswordForm
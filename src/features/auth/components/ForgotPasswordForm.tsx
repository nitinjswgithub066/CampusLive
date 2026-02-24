import React from 'react'
import { View } from 'react-native'
import ForgotStep1 from '@features/auth/components/ForgotStep1'
import ForgotStep2 from '@features/auth/components/ForgotStep2'
import ForgotStep3 from '@features/auth/components/ForgotStep3'
import useForgotPassword from '@features/auth/hooks/useForgotPassword'

const ForgotPasswordForm = () => {
  // ── Single hook instance — passed down to all 3 steps ──
  // Same singleton pattern as RegisterForm
  const hook = useForgotPassword()

  return (
    <View>
      {hook.currentStep === 1 && <ForgotStep1 hook={hook} />}
      {hook.currentStep === 2 && <ForgotStep2 hook={hook} />}
      {hook.currentStep === 3 && <ForgotStep3 hook={hook} />}
    </View>
  )
}

export default ForgotPasswordForm
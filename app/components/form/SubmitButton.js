import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'
export default function SubmitButton({name}) {
    const {handleSubmit} = useFormikContext()
    return (
        <AppButton title={name} onPress={handleSubmit} />
    )
}

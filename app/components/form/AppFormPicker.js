import { useFormikContext } from 'formik'
import React from 'react'

import AppPicker from '../AppPicker';
import { AppErrorMessage } from '.';
export default function AppFormPicker({items, name, placeholder,numberOfColumns,PickerItemComponent,width="100%"}) {
    const {errors, setFieldValue,touched,values} = useFormikContext()
    return (
        <>
            <AppPicker
            width={width}
            items={items}
            onSelectItem={(item)=>{setFieldValue(name,item)}}
            PickerItemComponent={PickerItemComponent}
            numberOfColumns={numberOfColumns}
            selectedItem={values[name]}
            placeholder={placeholder}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>        
    )
}

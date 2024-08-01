import TextInput from '@core/components/text-input'
import { TextFieldProps } from '@mui/material'
import { Control, Controller, FieldErrors, FieldPath, RegisterOptions } from 'react-hook-form'

type TFormInputProps<TFieldValues> = {
  name: string
  control: Control<any>
  label?: string
  errors?: FieldErrors<TFieldValues>
  rules?: Omit<
    RegisterOptions<TFieldValues, FieldPath<TFieldValues>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  inputProps?: TextFieldProps
}

export default function FormInputText<TFieldValues>(props: TFormInputProps<TFieldValues>) {
  const { name, control, label, rules, inputProps = { margin: 'normal' } } = props
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <TextInput
            id={name}
            helperText={error ? error.message : null}
            size='small'
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            {...inputProps}
          />
        )
      }}
    />
  )
}

import TextInput from "components/text-input";
import { Control, Controller } from "react-hook-form";

type TFormInputProps = {
  name: string;
  control: Control<any>;
  label: string;
  setValue: any
}

export default function FormInputText(props: TFormInputProps) {
  const {name, control, label, setValue} = props
  return <Controller
    name={name}
    control={control}
    render={({
      field: { onChange, value },
      fieldState: { error },
      formState,
    }) => (
      <TextInput
        helperText={error ? error.message : null}
        size="small"
        error={!!error}
        onChange={onChange}
        value={value}
        fullWidth
        label={label}
        variant="outlined"
      />
    )}
  />
}
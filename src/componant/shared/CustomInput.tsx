import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface CustomInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  type?: string;
  rows?: number;
  placeholder: string;
  defaultValue?: string;
  multiline?: boolean;
}

export default function CustomInput({
  control,
  name,
  label,
  type = "text",
  rows,
  placeholder,
  defaultValue = "",
  multiline = false,
}: CustomInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          multiline={multiline}
          rows={rows}
          fullWidth
          variant="outlined"
          error={!!error}
          placeholder={placeholder}
          helperText={error?.message}
        />
      )}
    />
  );
}

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
  step?: string;
  multiline?: boolean;
  rules?: {
    required?: string;
    pattern?: { value: RegExp; message: string };
    validate?: (value: string) => boolean | string | Promise<boolean | string>;
  };
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
  step,
  rules = {},
}: CustomInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      rules={{
        ...rules,
        pattern:
          rules.pattern ||
          (step !== "any" && type === "number"
            ? { value: /^-?\d+$/, message: "يجب إدخال رقم صحيح فقط" }
            : undefined),
      }}
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
          sx={{ "& .MuiFormHelperText-root": { textAlign: "right" } }}
          inputProps={{
            step,
            inputMode: "decimal",
          }}
        />
      )}
    />
  );
}

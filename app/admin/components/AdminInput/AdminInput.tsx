import { TextInput } from "react-native";
import { style } from "./style";

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "phone-pad";
  multiline?: boolean;
  maxLength?: number;
};

export default function AdminInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  multiline = false,
  maxLength
}: Props) {

  return (
    <TextInput
      style={[
        style.input,
        multiline && style.multiline
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      multiline={multiline}
      maxLength={maxLength}
      textAlignVertical={multiline ? "top" : "center"}
    />
  );
}
import { Text, TextInput, View } from "react-native";

type InputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

export default function FilterInput({ label, value, onChange }: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={onChange}></TextInput>
    </View>
  );
}

import { Text, TextInput, View } from "react-native";

type InputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
};

export default function FilterInput({ label, value, onChange }: InputProps) {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <Text style={{ fontWeight: "bold" }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={{ borderColor: "black", borderWidth: 1, width: 400 }}
      ></TextInput>
    </View>
  );
}

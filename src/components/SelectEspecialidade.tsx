import { Text, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type Especialidade = {
  title: string;
};

type Props = {
  data: Especialidade[];
  onSelect: (item: Especialidade) => void;
};

export default function SelectEspecialidade({ data, onSelect }: Props) {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem) => onSelect(selectedItem)}
      renderButton={(selectedItem, isOpened) => (
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text>
            {selectedItem ? selectedItem.title : "Selecionar especialidade"}
          </Text>
        </TouchableOpacity>
      )}
      renderItem={(item, index, isSelected) => (
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: isSelected ? "#ddd" : "#fff",
          }}
        >
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

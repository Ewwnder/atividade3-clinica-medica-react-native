import React from "react";
import { Text, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type Medico = {
  title: string;
};

type Props = {
  data: Medico[];
  onSelect: (item: Medico) => void;
};

export default function SelectMedico({ data, onSelect }: Props) {
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
          <Text>{selectedItem ? selectedItem.title : "Selecionar médico"}</Text>
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

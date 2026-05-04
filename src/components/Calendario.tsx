import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
const dataHoje = new Date();
const dataLimite = new Date();
dataLimite.setMonth(dataHoje.getMonth() + 2);

LocaleConfig.locales["br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ],
  dayNamesShort: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "br";

type Props = {
  onSelectDate: (date: string) => void;
};

export default function Calendario({ onSelectDate }: Props) {
  const [selected, setSelected] = useState("");
  return (
    <Calendar
      minDate={dataHoje.toISOString().split("T")[0]}
      maxDate={dataLimite.toISOString().split("T")[0]}
      onDayPress={(day) => {
        setSelected(day.dateString);
        onSelectDate(
          day.day +
            "/" +
            (day.month < 9 ? "0" + day.month : day.month) +
            "/" +
            day.year,
        );
      }}
    ></Calendar>
  );
}

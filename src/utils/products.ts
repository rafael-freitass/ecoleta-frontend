import { Smartphone, Tablet, Laptop, Monitor, Tv, MonitorCheck, Keyboard, Mouse, Printer } from "lucide-react-native";

export const products = [
  {
    category: "Dispositivos Móveis",
    items: [
      { id: "smartphone", label: "Smartphone", icon: Smartphone },
      { id: "tablet", label: "Tablet", icon: Tablet },
    ],
  },
  {
    category: "Computadores",
    items: [
      { id: "notebook", label: "Notebook/Laptop", icon: Laptop },
      { id: "desktop", label: "Computador Desktop", icon: Monitor },
    ],
  },
  {
    category: "Eletrodomésticos",
    items: [
      { id: "tv", label: "Televisão", icon: Tv },
    ],
  },
  {
    category: "Periféricos",
    items: [
      { id: "monitor", label: "Monitor", icon: MonitorCheck },
      { id: "keyboard", label: "Teclado", icon: Keyboard },
      { id: "mouse", label: "Mouse", icon: Mouse },
      { id: "printer", label: "Impressora", icon: Printer },
    ],
  },
];
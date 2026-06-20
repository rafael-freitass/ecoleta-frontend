import { Smartphone, Tablet, Laptop, Monitor, Tv, MonitorCheck, Keyboard, Mouse, Printer } from "lucide-react-native";

export const products = [
  {
    category: "Dispositivos Móveis",
    items: [
      { 
        id: "smartphone",
        label: "Smartphone",
        tipo: "Celulares",
        icon: Smartphone
      },
      { 
        id: "tablet",
        label: "Tablet",
        tipo: "Celulares",
        icon: Tablet
      },
    ],
  },

  {
    category: "Computadores",
    items: [
      { 
        id: "notebook",
        label: "Notebook/Laptop",
        tipo: "Computadores",
        icon: Laptop
      },
      { 
        id: "desktop",
        label: "Computador Desktop",
        tipo: "Computadores",
        icon: Monitor
      },
    ],
  },

  {
    category: "Eletrodomésticos",
    items: [
      { 
        id: "tv",
        label: "Televisão",
        tipo: "Televisores",
        icon: Tv
      },
    ],
  },

  {
    category: "Periféricos",
    items: [
      { 
        id: "monitor",
        label: "Monitor",
        tipo: "Monitores",
        icon: MonitorCheck
      },
      { 
        id: "keyboard",
        label: "Teclado",
        tipo: "Periféricos",
        icon: Keyboard
      },
      { 
        id: "mouse",
        label: "Mouse",
        tipo: "Periféricos",
        icon: Mouse
      },
      { 
        id: "printer",
        label: "Impressora",
        tipo: "Impressoras",
        icon: Printer
      },
    ],
  },
];
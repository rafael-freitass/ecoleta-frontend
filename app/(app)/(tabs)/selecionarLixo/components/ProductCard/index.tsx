import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";

interface Props {
  label: string;
  icon: React.ElementType;
  selected?: boolean;
  onPress?: () => void;
}

export default function ProductCard({
  label,
  icon: Icon,
  selected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={style.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={[style.container, selected && style.containerSelected]}>
        <Icon
          size={28}
          color={selected ? "#34CB79" : "#5C677D"}
        />
        <Text style={[style.label, selected && style.labelSelected]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
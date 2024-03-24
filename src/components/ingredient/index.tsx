import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./style";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
}

export function Ingredient(
  { name, image, selected = false, ...rest }: IngredientsProps & PressableProps
) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image
        source={require("@/assets/tomato.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Maçã</Text>
    </Pressable>
  );
}
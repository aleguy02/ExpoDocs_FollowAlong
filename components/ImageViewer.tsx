import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
};

// This is using destructuring, where instead of receiving a single Props object, it directly pulls the imgSource property out of the object.
export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

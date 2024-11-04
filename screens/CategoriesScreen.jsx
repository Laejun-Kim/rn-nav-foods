import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});

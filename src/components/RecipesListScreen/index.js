import React, {
  useEffect
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  getList
} from '../../redux/actions';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

const RecipesListScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const list = useSelector(state => state.list)
  const {
    lists
  } = list
  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  const FlatListItemSeparator = () => {
    return ( 
      <View style = {{ height: .5, width: "100%", backgroundColor: "#FFFF"}} />
    );
  }

  const idItem = (id) => {
    navigation.navigate("RecipeDetailsScreen", {
      id
    });
  }

  return (
    <View style={styles.MainContainer}>
      <FlatList 
        data={ lists }     
        ItemSeparatorComponent = {FlatListItemSeparator}
        renderItem={({item}) =>  
        <TouchableOpacity  onPress={() => idItem(item.id)} style={{flex:1, flexDirection: 'row'}}>
          <Image source = {{ uri: item.image }} style={styles.imageView} />           
          <Text style={styles.textView} >{item.title}</Text>
        </TouchableOpacity>        
        }
        keyExtractor={(item, index) => index.toString()}
                
      />
    </View>
  )

}
export default RecipesListScreen

const styles = StyleSheet.create({
  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 5,
    backgroundColor: '#000000'

  },

  imageView: {

    width: '70%',
    height: 100,
    margin: 7,
    borderRadius: 4

  },

  textView: {

    width: '30%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#FFFF'

  }
});
import { StyleSheet, Image, FlatList } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import tweets from '../../assets/data/tweets';
import Entry from '../../components/Entry';

const tweet = tweets[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Entry tweet={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  entryContainer: {
    backgroundColor: '#171b1e',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    width: '95%',
  },
  secondaryContainer: {
    flex: 1,
    marginTop: 10,
    shadowColor: '#1b2027',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    //borderTopWidth: 0.2,
    //borderColor: '#373a3c'
  }
});

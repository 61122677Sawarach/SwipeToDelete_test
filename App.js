import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import ItemBox from './src/components/ItemBox';

 const data = [
    {id: '1', name: 'A'},
    {id: '2', name: 'B'},
    {id: '3', name: 'C'},
    {id: '4', name: 'D'},
    {id: '5', name: 'E'},
    {id: '6', name: 'F'},
    {id: '7', name: 'G'},
    {id: '8', name: 'H'},
    {id: '9', name: 'I'},
    {id: '10', name: 'J'},
    {id: '11', name: 'K'},
    {id: '12', name: 'L'},
    {id: '13', name: 'M'},
    {id: '14', name: 'N'},
    {id: '15', name: 'O'},
    {id: '16', name: 'P'},
    {id: '17', name: 'Q'},
    {id: '18', name: 'R'},
    {id: '19', name: 'S'},
    {id: '20', name: 'T'},
 ];
 
 const App = () => {
     const [lists, setLists] = useState(data);
     return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={lists}
                renderItem={({item}) => {
                    return <ItemBox data={item} />;
                }}
                ItemSeparatorComponent = {() => {
                    return <View style={styles.separatorLine}></View>;
                }}
            />
        </SafeAreaView>
     );
 };

 export default App;

 const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     separatorLine: {
         height: 1,
         backgroundColor: 'black',
     },
 });
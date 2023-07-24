import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

const SearchResults = ({data, input, setInput}) => {
    const navigation = useNavigation();

    return (
        <View style={{padding:10}}>
            <FlatList data={data} renderItem={({item}) => {
                if(item.place.toLowerCase().includes(input.toLowerCase())){
                    if(input === ""){
                        return null;
                    }
                    return (
                        <Pressable 
                            onPress={() => {
                                setInput(item.place);
                                navigation.navigate("Home", {
                                    input: item.place
                                })
                            }} 
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginVertical: 10
                            }}>
                            <View>
                                <Image style={{
                                    width: 70,
                                    height: 70,
                                    marginRight: 30
                                }} 
                                source={{uri:item.placeImage}}/>
                            </View>
                            <View style={{marginLeft: 0}}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: "500"
                                }}>{item.place}</Text>
                                <Text style={{marginVertical: 4}}>{item.shortDescription}</Text>
                                <Text style={{color: "gray", fontSize: 15}}>{item.properties.length} Properties</Text>
                            </View>
                        </Pressable>
                    )
                }
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchResults; 
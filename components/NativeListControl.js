import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateHeader from "./DateHeader";

export default class NativeListControl extends Component {
  
        
      
          render() {
              const idList = {
                Gnanandha1: {
                    name: 'Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam ',
                    color: 'green'
                },
                Gnanandha2: {
                    name: 'Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam ',
                    color: 'red'
                },
                Gnanandha3: {
                    name: 'Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam ',
                    color: 'blue'
                },
                Gnanandha4: {
                    name: 'Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam ',
                    color: 'yellow'
                },
                Gnanandha5: {
                    name: 'Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam Gnanandha Charanam ',
                    color: 'black'
                }
              };
                return (
                    <View>
                        <DateHeader date={new Date().toLocaleDateString()} />
                        { Object.keys(idList).map(key => {
                            const { name, color } = idList[key];
                            console.log({color});
                                 return (
                                     <View key={key} style={{flex: 1, flexWrap: 'wrap'}}>
                                    <Ionicons name={"ios-happy"} size={100} color={color} />
                                    <Text style={{fontSize: 20}} color={color}>{name}</Text>
                                </View> );
                            })
                        }
                        
                    </View>  

                );
            }
}
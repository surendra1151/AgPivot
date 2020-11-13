import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback, Dimensions,TextInput,ScrollView,TouchableOpacity,StyleSheet,Image
} from 'react-native';
import Modal from 'react-native-modal';
import Search from '../Search';
const { width, height } = Dimensions.get('window');

     export class Dropdown extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            searched_data:this.props.data,
            isOpenDropDown: false,
            selectedValue: this.props.defaultItem,
            searchValue:'',
            name: this.props.name,
            index: this.props.index,
        };
        this.opendropdown = this.opendropdown.bind(this);
        this.selectedItem = this.selectedItem.bind(this);
        this.searchData = this.searchData.bind(this);
    }
    opendropdown() {
        this.setState({
            isOpenDropDown: true,
        })
    }
    selectedItem(value) {
        this.setState({
            selectedValue: value,
            isOpenDropDown: false,
        });
    }
         searchData(data) {
             console.log();
             this.setState({
                 searchValue: data,
             });
             var filtered_data = this.state.data.filter(name => name.includes(data));
             this.setState({
                 searched_data: filtered_data,
             })
         }


         render(){
        return(
            <View>

                {this.state.name !== "select" ?
                    <TouchableWithoutFeedback onPress={() => this.opendropdown()}>
                        <View>
                            <Text style={{paddingLeft: 10, color: '#686868', fontSize: 14, paddingTop: 11}}>
                                {this.state.selectedValue}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback> :
                    <TouchableWithoutFeedback onPress={() => this.opendropdown()} >
                        <View style={{ flexDirection:'row',marginLeft:10,borderWidth:0.7,marginTop:15,borderLeftWidth:0.7,borderRadius:2,color:'#B4B4B4'}}>
                            <Text style={{paddingLeft: 3, color: '#686868', fontSize: 14, paddingTop: 11,paddingBottom:5}}>
                                {this.state.selectedValue}
                            </Text>
                            <Image source={require('../images/Dropdown.png')} style={styles.dropdown}/>
                        </View>
                    </TouchableWithoutFeedback>
                }

                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: 0.5*width, zIndex: 100000}}>
                    <Modal isVisible={this.state.isOpenDropDown} onBackdropPress={() => this.setState({ isOpenDropDown: false })} style={{marginTop: 150, marginLeft: width/2-160, backgroundColor: 'white', height: 40, borderWidth: 1, borderColor: 'black', width: 300,marginBottom:200}}>
                        <TextInput
                            placeholder={'Search'}
                            value={this.state.searchValue}
                            editable = {true}
                            onChangeText={(data)=>this.searchData(data)}
                            style={{backgroundColor: '#c6c6c6', color: '#686868', fontSize: 14, padding: 15, marginTop: 10, margin: 10, marginBottom: 0}}
                        />

                        <ScrollView style={{flexGrow: 1, flex: 1}}>
                            {this.state.data.map((text, index) =>
                                <TouchableOpacity key={index} onPress={() => this.selectedItem(text)}>
                                    <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2'}}>
                                        <Text style={{fontSize: 14, color: '#686868', paddingTop: 10, paddingBottom: 10, paddingLeft: 15}}>
                                            {text}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                    </Modal>
                    </View>
            </View>
        )
    }

     }

const styles = StyleSheet.create ({
    dropdown: {
        zIndex: 10000,
        width: 10,
        height: 10,
        marginLeft:5,
        marginTop:16
    },
    text_input: {
        bottom: 35
    }
});





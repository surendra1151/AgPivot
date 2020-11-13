import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native';
import Modal from 'react-native-modal';
import {width, height} from "../constants/constant";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Orientation from 'react-native-orientation';

export class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            searched_data: this.props.data,
            isOpenDropDown: false,
            selectedValue: this.props.defaultItem,
            searchValue: '',
            name: this.props.name,
            index: this.props.index,
            width: width,
            height: height,
        };
        this.opendropdown = this.opendropdown.bind(this);
        this.selectedItem = this.selectedItem.bind(this);
        this.searchData = this.searchData.bind(this);
    }

    componentDidMount(): void {
        const initial = Orientation.getInitialOrientation();
        console.log("The Screen is in:", initial);
        if (initial === 'PORTRAIT') {
            // this.setState({
            //     width: this.state.height,
            //     height: this.state.width,
            // })
            // do something
            this.setState({
                width: height,
                height: width,
            })
        } else {
            // do something else
        }
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
        this.props.sendData(value, this.state.name, this.state.index);
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

    render() {
        return (
            <View>
                <Image source={require('../assets/Dropdown.png')} style={[{left: 0.27*this.state.width,},styles.dropdown]}/>
                <TouchableOpacity onPress={() => this.opendropdown()} style={styles.text_input}>
                    <View style={{
                        width: 0.30 * this.state.width,
                        height: 40,
                        borderWidth: 1,
                        borderColor: '#CED4DA',
                        borderRadius: 3,
                        marginTop: 5,
                        color: 'black' }}>
                        <Text style={{paddingLeft: 10, color: 'black', fontSize: 13, paddingTop: 11}}>
                            {this.state.selectedValue}
                        </Text>
                    </View>
                </TouchableOpacity>
                <KeyboardAwareScrollView>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: 0.5*this.state.width, zIndex: 100000}}>
                        <Modal isVisible={this.state.isOpenDropDown} onBackdropPress={() => this.setState({ isOpenDropDown: false })} style={{marginTop: 50, marginLeft: this.state.width/2-160, backgroundColor: 'white', height: 0, borderWidth: 1, borderColor: 'black', width: 300}}>
                            <TextInput
                                placeholder={'Search'}
                                value={this.state.searchValue}
                                editable = {true}
                                onChangeText={(data)=>this.searchData(data)}
                                style={{backgroundColor: '#c6c6c6', color: 'black', fontSize: 15, padding: 15, marginTop: 10, margin: 10, marginBottom: 0}}
                            />
                            <View style={{position: 'relative', borderBottomWidth: 1, borderBottomColor: '#C6C6C6'}}>
                                <Text style={{textAlign: 'center', fontSize: 25, color: 'black', paddingTop: 15, paddingBottom: 10}}>
                                    Select a Value
                                </Text>
                            </View>
                            <ScrollView style={{flexGrow: 1, flex: 1}}>
                                {this.state.searched_data.map((text, index) =>
                                    <TouchableOpacity key={index} onPress={() => this.selectedItem(text)}>
                                        <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2'}}>
                                            <Text style={{fontSize: 20, color: 'black', paddingTop: 10, paddingBottom: 10, paddingLeft: 15}}>
                                                {text}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </Modal>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    dropdown: {
        zIndex: 10000,
        width: 20,
        height: 20
    },
    text_input: {
        bottom: 35
    }
});

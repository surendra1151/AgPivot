import React,{Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableHighlight,
    Alert,
    Dimensions,
    TextInput, AsyncStorage, ScrollView,CheckBox
} from 'react-native';
import {DropDown} from '../components/DropDownOne';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions, StackActions} from "react-navigation";
import {HarvestRecords} from "../components/HarvestRecords";

export default class HarvestSampling extends React.Component{
    static navigationOptions={
        header:null,
    };
   constructor(props) {
       super(props);
       this.state={
           year:[
               "2019",
               "2020"
           ],
           farm:[
               "Alsum",
               "Other"
           ],
           field:[
               "002",
               "003",
               "013",
               "017",
               "018",
               "023",
               "024",
               "025",
               "051",
               "052",
               "055",
               "059",
               "071",
               "072",
               "124",
               "175",
               "183",
               "184",
               "191",
               "A-3 205",
               "Bonnett Little/East 210 ",
               "Kent 220",
               "Parks",
               "Tracy North",
               "Parr/A-2"
           ],
           variety:[],
           color:[],
           seed:[],
           date:"2019-11-30",
           time:"",
           bin:[
               "01",
               "02",
               "08",
               "09",
               "10",
               "11",
               "12",
               "13",
               "14",
               "15",
               "16",
               "20",
               "21",
               "51",
               "52",
               "53",
               "54",
               "55",
               "56",
               "North Shed",
               "Potato World",
               "Mini Bin-8",
               "Mini Bin-7",
               "22",
               "23",
               "Mini Bin-21",
               "Mini Bin-22",
               "Mini Bin-23"
           ],
           top:"",
           scab:"",
           hollow:"",
           internal:"",
           defects:[
               "No Defect",
               "Air Cracks",
               "Artificial Coloring",
               "Bruises",
               "Cuts",
               "Dirt",
               "Elephant Hide",
               "Enlared Lenticels",
               "External Discoloration",
               "Flattened or Depressed Areas / Pressure Bruises",
               "Flea beetle injury",
               "Greening",
               "Growth Cracks",
               "Grub Damage",
               "Insects or Worms",
               "Nematode(Root Knot)",
               "Rhizoctonia",
               "Rodent or Bird Damage",
               "Russeting(On Non Russet Type)",
               "Scab,Pitted",
               "Scab,Russet",
               "Scab,Surface",
               "Second Growth",
               "Silver Scurf",
               "Sprouts",
               "Sunburn",
               "Sunken Discolored Areas",
               "Surface Cracks(Areas affected fine net-like Cracking should be ignored)",
               "Wirework or Grass Damage",
               "Ingrown Sprots",
               "Internal Black Spot",
               "Internal Discoloration",
               "Vascular Browning",
               "Fusarium Wilt",
               "Net Necrosis",
               "Other Necrosis",
               "Stem End Browning",
               "Hollow heart or Hollow heart With Discoloration",
               "Light Brown Discoloration(Brown Center)",
               "Internal Brown Spot and Similar Discoloration(Heat Necrosis)"
           ],
           defect_weight:"",
           comments:"",
           recordScreen:"entry",


       }
   }
   /* condition for entry or record screen */
    recordScreen(name){
        if (name==='entry'){
            this.setState({recordScreen:'entry'})
        }
        else if (name==='records'){
            this.setState({recordScreen:'records'})
        }


    }
    AgPivot(){
        this.props.navigation.replace('Home');
    }
    /*condition for logout to move to login screen */
    logout(){
        AsyncStorage.removeItem('loginCredentials').then((value) => {
            AsyncStorage.removeItem('mostUsed').then((value) =>{} )

        } )
        const resetAction= StackActions.reset({
            index:0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
        });
        this.props.navigation.dispatch(resetAction);
    }
   render(){
       return(
           <View style={{flex:1}}>
               <View
                   style={{
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                       margin: 20,
                       marginBottom: 5,
                   }}>
                   <View>
                       <TouchableHighlight onPress={() =>this.AgPivot()}>
                           <Image source={require('../assets/Logo.png')} />
                       </TouchableHighlight>
                   </View>
                   <View>
                       <Text style={styles.farm}>
                           {' '}
                           Integrated Farm Management Made Easy
                       </Text>
                   </View>
                   <View style={{flexDirection: 'row', marginRight: 30}}>
                       <Text style={{marginRight: 15,color:'#634720'}}>Admin</Text>
                       <Image
                           source={require('../assets/Bitmap.png')}
                           style={{borderRadius: 50,marginRight:20}}
                       />
                       <TouchableHighlight onPress={() =>this.logout()}>
                           <Text style={{color:'#634720'}}>Logout</Text>
                       </TouchableHighlight>
                   </View>
               </View>
               <View
                   style={{
                       flexDirection: 'row',
                       borderWidth: 0.686327,
                       borderColor: '#CCCBCB',
                       height: 0,
                   }}
               />
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                   <View style={{flexDirection:'row'}}>
                       <Text style={styles.home}>Home</Text>
                       <Text style={styles.divison}>/</Text>
                       <Text style={styles.edit}>Edit Profile</Text>
                   </View>
               </View>
               <View style={{flexDirection:'row'}}>
                   {this.state.recordScreen==='entry'?
                       <Text style={styles.harvest}>Harvest Sampling</Text>:
                       <Text style={styles.harvest}>Harvest Sampling Table</Text>
                   }
                   <View style={{flex: 1, alignItems: 'flex-end'}}>
                       <View style={{marginTop: 18, flexDirection: 'row'}}>
                           {this.state.recordScreen==='entry'?
                               <View style={{flexDirection:'row'}}>
                                   <TouchableHighlight onPress={() =>this.recordScreen('entry')}>
                                       <Image source={require('../assets/Entry.png')} />
                                   </TouchableHighlight>
                                   <TouchableHighlight onPress={() =>this.recordScreen('records')}>
                                       <Image
                                           source={require('../assets/Records.png')}
                                           style={{marginLeft: 20, marginRight: 30}}
                                       />
                                   </TouchableHighlight>
                               </View>:
                               <View style={{flexDirection: 'row', marginRight: 30}}>
                                   <TouchableHighlight
                                       onPress={() => this.recordScreen('entry')}>
                                       <Text style={styles.entry}>Entry</Text>
                                   </TouchableHighlight>
                                   <TouchableHighlight
                                       onPress={() => this.recordScreen('records')}>
                                       <LinearGradient
                                           start={{x: 0.5, y: 0}}
                                           end={{x: 2, y: 0}}
                                           colors={['#634720', '#C99349']}>
                                           <Text style={styles.records}>Records</Text>
                                       </LinearGradient>
                                   </TouchableHighlight>
                               </View>
                           }
                       </View>
                   </View>

               </View>
               {this.state.recordScreen !== 'entry' ?
                   <HarvestRecords/> :
                   <ScrollView style={{flexGrow: 1}}>
                       <View style={{marginBottom: 200, paddingBottom: 50}}>
                           <Text style={styles.identification}>Identify Field Information</Text>
                           <View style={{flexDirection: 'row', marginRight: 300}}>
                               <View
                                   style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                   <Text style={styles.year}>Year</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 360}}>
                                   <Text style={styles.year}>Farm</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 353}}>
                                   <Text style={styles.year}>Field Number</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row'}}>
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 85,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name="2019"
                                       defaultItem="2019"
                                       value="2019"
                                       data={this.state.year}
                                       color="#686868"
                                   />
                               </View>
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 60,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name="Alsum"
                                       defaultItem="Alsum"
                                       value="Alsum"
                                       data={this.state.farm}
                                       color="#686868"
                                   />
                               </View>
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 60,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name="002"
                                       defaultItem="002"
                                       value="002"
                                       data={this.state.field}
                                       color="#686868"
                                   />
                               </View>
                           </View>
                           <View style={{flexDirection: 'row', marginRight: 300}}>
                               <View
                                   style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                   <Text style={styles.year}>Variety</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 343}}>
                                   <Text style={styles.year}>Color/Variety</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 303}}>
                                   <Text style={styles.year}>Seed Grower</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row'}}>
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 85,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name=""
                                       defaultItem=""
                                       value=""
                                       data={this.state.variety}
                                       color="#686868"
                                   />
                               </View>
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 60,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name=""
                                       defaultItem=""
                                       value=""
                                       data={this.state.color}
                                       color="#686868"
                                   />
                               </View>
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 60,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name=""
                                       defaultItem=""
                                       value=""
                                       data={this.state.seed}
                                       color="#686868"
                                   />
                               </View>


                           </View>
                           <View style={{flex: 1, alignItems: 'flex-end'}}>
                               <View style={{marginRight: 83, marginTop: 15}}>
                                   <LinearGradient
                                       start={{x: 0.5, y: 0}}
                                       end={{x: 2, y: 0}}
                                       colors={['#634720', '#C99349']}>
                                       <Text style={styles.identify}>Identify</Text>
                                   </LinearGradient>
                               </View>
                           </View>
                           <View
                               style={{
                                   flexDirection: 'row',
                                   borderWidth: 0.686327,
                                   borderColor: '#CCCBCB',
                                   height: 0,
                                   marginTop: 20,
                                   marginLeft: 85,
                                   marginRight: 50
                               }}
                           />
                           <View style={{flexDirection: 'row', marginLeft: 85, marginTop: 20}}>
                               <CheckBox value={this.state.checked}/>
                               <View style={{marginTop: 5}}>
                                   <Text style={styles.year}>Trial Sample</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row', marginRight: 300}}>
                               <View
                                   style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                   <Text style={styles.year}>Date</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 356}}>
                                   <Text style={styles.year}>Time</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 355}}>
                                   <Text style={styles.year}>Bin Number</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row'}}>
                               <DatePicker
                                   style={{
                                       width: 330,
                                       marginTop: 15,
                                       borderColor: '#B4B4B4',
                                       color: '#686868',
                                       marginLeft: 85
                                   }}
                                   date={this.state.date}
                                   mode="date"
                                   placeholder="select date"
                                   format="YYYY-MM-DD"
                                   androidMode="default"
                                   minDate="1900-01-01"
                                   maxDate="2050-12-31"
                                   // minuteInterval={1}
                                   // is24Hour={true}
                                   confirmBtnText="Confirm"
                                   cancelBtnText="Cancel"
                                   showIcon={false}
                                   customStyles={{

                                       dateInput: {
                                           paddingRight: 195,
                                           color: '#686868',
                                           height: 40,
                                           borderRadius: 5

                                       },
                                       dateText: {
                                           color: '#686868',
                                           flexDirection: 'row'
                                       }
                                       // ... You can check the source to find the other keys.
                                   }}
                                   onDateChange={(date) => {
                                       this.setState({datetime: date})
                                   }}
                               />
                               <DatePicker
                                   style={{
                                       width: 330,
                                       marginTop: 15,
                                       borderColor: '#B4B4B4',
                                       marginLeft: 60,
                                       Color: '#634720',
                                   }}
                                   date={this.state.time}
                                   mode="time"
                                   placeholder="select time"
                                   format="HH:mm"
                                   androidMode="spinner"
                                   confirmBtnText="confirm"
                                   cancelBtnText="cancel"
                                   minuteInterval={1}
                                   showIcon={false}
                                   is24Hour={true}
                                   coustomstyles={{
                                       dateInput: {
                                           paddingLeft: 20,
                                           height: 40,
                                           paddingTop: 50,
                                           paddingBottom: 50,
                                           borderRadius: 2,
                                       },
                                       dateText: {
                                           color: '#686868',
                                           fontSize: 50,
                                       },
                                   }}
                                   onDateChange={time => {
                                       this.setState({time: time});
                                   }}
                               />
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 60,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name="01"
                                       defaultItem="01"
                                       value="01"
                                       data={this.state.bin}
                                       color="#686868"
                                   />
                               </View>
                           </View>
                           <View style={{flexDirection: 'row', marginRight: 300}}>
                               <View
                                   style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                   <Text style={styles.year}>Top Oz</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 345}}>
                                   <Text style={styles.year}>Scab Weight (lbs)</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 275}}>
                                   <Text style={styles.year}>Hollow Heart Weight (lbs)</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row'}}>
                               <TextInput
                                   value={this.state.top}
                                   keyboardType={'numeric'}
                                   placeholder={''}
                                   style={{
                                       height: 40,
                                       borderColor: '#B4B4B4',
                                       borderWidth: 1,
                                       marginLeft: 85,
                                       marginTop: 15,
                                       borderRadius: 5,
                                       width: 330
                                   }}
                                   onChangeText={top => this.setState({top})}
                               />
                               <TextInput
                                   value={this.state.scab}
                                   keyboardType={'numeric'}
                                   placeholder={''}
                                   style={{
                                       height: 40,
                                       borderColor: '#B4B4B4',
                                       borderWidth: 1,
                                       marginLeft: 60,
                                       marginTop: 15,
                                       borderRadius: 5,
                                       width: 330
                                   }}
                                   onChangeText={scab => this.setState({scab})}
                               />
                               <TextInput
                                   value={this.state.hollow}
                                   keyboardType={'numeric'}
                                   placeholder={''}
                                   style={{
                                       height: 40,
                                       borderColor: '#B4B4B4',
                                       borderWidth: 1,
                                       marginLeft: 60,
                                       marginTop: 15,
                                       borderRadius: 5,
                                       width: 330
                                   }}
                                   onChangeText={hollow => this.setState({hollow})}
                               />

                           </View>
                           <View style={{flexDirection: 'row', marginRight: 300}}>
                               <View
                                   style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                   <Text style={styles.year}>Internal Discoloration (lbs)</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 227}}>
                                   <Text style={styles.year}>Other Defect</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 303}}>
                                   <Text style={styles.year}>Other Defect Weight (lbs)</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row'}}>
                               <TextInput
                                   value={this.state.internal}
                                   keyboardType={'numeric'}
                                   placeholder={''}
                                   style={{
                                       height: 40,
                                       borderColor: '#B4B4B4',
                                       borderWidth: 1,
                                       marginLeft: 85,
                                       marginTop: 15,
                                       borderRadius: 5,
                                       width: 330
                                   }}
                                   onChangeText={internal => this.setState({internal})}
                               />
                               <View
                                   style={{
                                       width: 330,
                                       marginLeft: 60,
                                       borderColor: '#B4B4B4',
                                       borderRadius: 5,
                                       borderWidth: 1,
                                       marginTop: 15,
                                       paddingBottom: 25,
                                       height: 40,
                                   }}>
                                   <DropDown
                                       name="No Defects"
                                       defaultItem="No Defects"
                                       value="No Defects"
                                       data={this.state.defects}
                                       color="#686868"
                                   />
                               </View>
                               <TextInput
                                   value={this.state.defect_weight}
                                   keyboardType={'numeric'}
                                   placeholder={''}
                                   style={{
                                       height: 40,
                                       borderColor: '#B4B4B4',
                                       borderWidth: 1,
                                       marginLeft: 60,
                                       marginTop: 15,
                                       borderRadius: 5,
                                       width: 330
                                   }}
                                   onChangeText={defect_weight => this.setState({defect_weight})}
                               />
                           </View>
                           <View style={{flexDirection: 'row', marginRight: 300}}>
                               <View
                                   style={{marginLeft: 85, marginTop: 30, flexDirection: 'row'}}>
                                   <Text style={styles.year}>Sampling Size Profile</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                               <View
                                   style={{flexDirection: 'row', marginTop: 30, marginLeft: 580}}>
                                   <Text style={styles.year}>Comments</Text>
                                   <Text style={{color: 'red'}}>*</Text>
                               </View>
                           </View>
                           <View style={{flexDirection: 'row'}}>
                               <Text style={styles.sampling}>Sampling Size Profile will appear after variety
                                   selection</Text>
                               <TextInput
                                   value={this.state.comments}
                                   keyboardType={'numeric'}
                                   placeholder={''}
                                   style={{
                                       borderColor: '#B4B4B4',
                                       borderWidth: 1,
                                       marginLeft: 60,
                                       marginTop: 15,
                                       borderRadius: 5,
                                       width: 400,
                                       height: 200
                                   }}
                                   onChangeText={comments => this.setState({comments})} R
                               />
                           </View>
                           <View style={{
                               flex: 1,
                               alignItems: 'flex-end',
                               marginTop: 30,
                               marginBottom: 50,
                               marginRight: 85
                           }}>
                               <Image source={require('../assets/Submit.png')}/>
                           </View>
                       </View>
                   </ScrollView>
               }
           </View>
       )
   }
}
const styles=StyleSheet.create({
    farm: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 15,
        color: 'grey',
        marginTop: 20,
    },
    home: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 18,
        color: '#9D9D9D',
        marginTop: 20,
        marginLeft: 85,
        height: 25,
    },
    divison: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,
        color: '#9D9D9D',
        marginTop: 20,
        marginLeft: 10,
    },
    edit: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 18,
        color: '#717171',
        marginTop: 20,
        marginLeft: 10,
    },
    harvest:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        color: '#686868',
        marginLeft: 85,
        marginTop: 20,
    },
    year: {
        fontFamily: ' Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
    },
    entry: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#634720',
        borderRadius: 2,
        paddingLeft: 36,
        paddingTop: 10,
        paddingRight: 36,
        borderWidth: 1,
        borderColor: '#634720',
        height: 35,
        marginRight: 20,
        width: 103,
    },
    records: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: '#FFFFFF',
        borderRadius: 2,
        textAlign: 'center',
        paddingTop: 10,
        height: 35,
        width: 103,
    },
    identification:{
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize:18,
        lineHeight:24,
        color: '#717171',
        marginLeft: 85,
        marginTop: 20,
    },
    identify: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        borderRadius: 2,
        height: 36,
        width: 102,
        textAlign: 'center',
        paddingTop: 10,
        color: 'white',

    },
    sampling:{
        fontFamily: ' Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#686868',
        marginLeft:85,
        borderWidth:0.6,
        width:650,
        height:200,
        borderRightWidth:1,
        paddingLeft:20,
        paddingTop:20,
        marginTop:15,
    },
})

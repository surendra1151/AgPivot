import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
export class SeedRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: 'no',
      currentSortDir: 'asc',
      table: [
        {
          no: ' 1 ',
          planned: '03-27-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Red',
          color: 'Red Norland',
          grower: 'Cando',
          field: 'Arena',
          cwt: '1260',
        },
        {
          no: ' 2 ',
          planned: '03-28-2019',
          seed: 'Norbest Farms',
          variety: 'Golden',
          color: 'Golden Colomba',
          grower: '',
          field: 'Arena',
          cwt: '420',
        },
        {
          no: ' 3 ',
          planned: '03-28-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Russet',
          color: 'Russet Goldrush',
          grower: 'cando',
          field: 'Arena',
          cwt: '1080',
        },
        {
          no: ' 4 ',
          planned: '03-28-2019',
          seed: 'Bula Potato Farms',
          variety: 'Russet',
          color: 'Russet Reveille',
          grower: 'Post Lake',
          field: 'Arena',
          cwt: '100',
        },
        {
          no: ' 5 ',
          planned: '03-28-2019',
          seed: 'Schroeder Bros(RPE)',
          variety: 'Russet',
          color: 'Russet Goldrush',
          grower: 'Antigo',
          field: 'Arena',
          cwt: '2940',
        },
        {
          no: ' 6 ',
          planned: '03-28-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Russet',
          color: 'Russet Labelle',
          grower: 'Cando',
          field: 'Arena',
          cwt: '210',
        },
        {
          no: ' 7 ',
          planned: '03-28-2019',
          seed: 'Bula Potatao Farms',
          variety: 'Russet',
          color: 'Russet Silverton',
          grower: 'Post Lake',
          field: 'Arena',
          cwt: '1680',
        },
        {
          no: ' 8 ',
          planned: '03-28-2019',
          seed: 'Hafner Seed Farms',
          variety: 'Russet',
          color: 'Russet Norkotah Standard',
          grower: 'Bryant',
          field: 'Arena',
          cwt: '1680',
        },
        {
          no: ' 9 ',
          planned: '03-28-2019',
          seed: 'Colorado-Kist Farms',
          variety: 'Golden',
          color: 'Golden Latona',
          grower: 'Monte Vista',
          field: 'Arena',
          cwt: '420',
        },
        {
          no: '10',
          planned: '03-28-2019',
          seed: 'Baginski',
          variety: 'Golden',
          color: 'Golden Soraya',
          grower: 'Antigo',
          field: 'Arena',
          cwt: '420',
        },
        {
          no: '11',
          planned: '03-28-2019',
          seed: 'Schroeder Bros(RPE)',
          variety: 'Russet',
          color: 'Russet Norkotah Co 8',
          grower: 'Antigo',
          field: 'Arena',
          cwt: '4620',
        },
        {
          no: '12',
          planned: '03-28-2019',
          seed: 'Schroeder Bros(RPE)',
          variety: 'Russet',
          color: 'Russet Silverton',
          grower: 'Antigo',
          field: 'Arena',
          cwt: '5460',
        },
        {
          no: '13',
          planned: '03-28-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Russet',
          color: 'Russet Norkotah Tx 278',
          grower: 'Cando',
          field: 'Arena',
          cwt: '5040',
        },
        {
          no: '14',
          planned: '03-28-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Russet',
          color: 'Russet Norkotah Tx 296',
          grower: 'Cando',
          field: 'Arena',
          cwt: '6300',
        },
        {
          no: '15',
          planned: '03-28-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Russet',
          color: 'Russet Silverton',
          grower: 'Cando',
          field: 'Arena',
          cwt: '5040',
        },
        {
          no: '16',
          planned: '03-28-2019',
          seed: 'Bushman Riverside Ranch',
          variety: 'Russet',
          color: 'Russet Silverton',
          grower: 'Crivitz',
          field: 'Grand Marsh',
          cwt: '10500',
        },
        {
          no: '17',
          planned: '03-28-2019',
          seed: 'Schroeder Bros(RPE)',
          variety: 'Russet',
          color: 'Russet Norkotah Tx 296',
          grower: 'Antigo',
          field: 'Arena',
          cwt: '5040',
        },
        {
          no: '18',
          planned: '03-28-2019',
          seed: 'Parkland/Pinery Farms',
          variety: 'Golden',
          color: 'GOlden Yellow Star',
          grower: 'Grand Bend',
          field: 'Arena',
          cwt: '1260',
        },
        {
          no: '19',
          planned: '03-28-2019',
          seed: 'Jorde Certified Seed.LLC',
          variety: 'Russet',
          color: 'Russet Mountain Gem',
          grower: 'Cando',
          field: 'Arena',
          cwt: '210',
        },
        {
          no: '20',
          planned: '03-29-2019',
          seed: 'Bula Potato Farms',
          variety: 'Russet',
          color: 'Russet Umatilla',
          grower: 'Post Lake',
          field: 'Arena',
          cwt: '25',
        },
      ],
    };
  }
  sort(key) {
    console.log(
      'working',
      key,
      this.state.currentSort,
      this.state.currentSortDir,
    );
    if (key === this.state.currentSort) {
      console.log('I am in same currentSort', this.state.currentSortDir);
      if (this.state.currentSortDir === 'asc') {
        this.setState({currentSortDir: 'desc'});
      } else {
        this.setState({currentSortDir: 'asc'});
      }
    }
    this.setState({
      currentSort: key,
    });
    console.log(
      'is it working',
      this.state.currentSort,
      this.state.currentSortDir,
    );
    if (this.state.currentSortDir === 'desc') {
      const data = {name: key, sortby: 'asc'};
      this.state.table.sort((a, b) => {
        let modifier = 1;
        if (data.sortby === 'asc') {
          modifier = -1;
        }
        if (a[data.name] < b[data.name]) {
          return -1 * modifier;
        }
        if (a[data.name] > b[data.name]) {
          return 1 * modifier;
        }
        return this.state.table;
      });
    } else {
      const data = {name: key, sortby: 'desc'};
      this.state.table.sort((a, b) => {
        let modifier = 1;
        if (data.sortby === 'asc') {
          modifier = -1;
        }
        if (a[data.name] < b[data.name]) {
          return -1 * modifier;
        }
        if (a[data.name] > b[data.name]) {
          return 1 * modifier;
        }
        return this.state.table;
      });
    }
    console.log('values:', this.state.currentSort, this.state.currentSortDir);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={styles.search}>search :</Text>
          <TextInput
            style={{
              height: 30,
              width: 225,
              marginRight: 24,
              borderWidth: 0.6,
              marginTop: 20,
              borderTopWidth: 0.6,
              borderLeftWidth: 0.5,
              borderRightWidth: 0.8,
              borderBottomWidth: 0.6,
            }}
          />
        </View>
        <ScrollView
          horizontal={true}
          vertical={true}
          scrollEnabled={true}
          onContentSizeChange={this.onContentSizeChange}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight onPress={() => this.sort('no')}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.yash}>#</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('planned')}>
                <View style={{flexDirection: 'row', marginLeft: 70}}>
                  <Text style={styles.farmpo}>Planned Date</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('seed')}>
                <View style={{flexDirection: 'row', marginLeft: 70}}>
                  <Text style={styles.farmpo}>Seed Grower</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('variety')}>
                <View style={{flexDirection: 'row', marginLeft: 120}}>
                  <Text style={styles.farmpo}>Variety</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('color')}>
                <View style={{flexDirection: 'row', marginLeft: 70}}>
                  <Text style={styles.farmpo}>Color/Variety</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('grower')}>
                <View style={{flexDirection: 'row', marginLeft: 70}}>
                  <Text style={styles.farmpo}>Grower City</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('field')}>
                <View style={{flexDirection: 'row', marginLeft: 70}}>
                  <Text style={styles.farmpo}>Field Loction</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.sort('cwt')}>
                <View style={{flexDirection: 'row', marginLeft: 70}}>
                  <Text style={styles.farmpo}>Planned CWT</Text>
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/up.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/Uparrow.png')}
                      style={{marginTop: 44, marginLeft: 7.67}}
                    />
                  )}
                  {this.state.currentSortDir === 'asc' ? (
                    <Image
                      source={require('../assets/Downarrow.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  ) : (
                    <Image
                      source={require('../assets/down.png')}
                      style={{marginTop: 44, marginLeft: 3}}
                    />
                  )}
                </View>
              </TouchableHighlight>
            </View>
            <View
              style={{
                borderWidth: 1,
                height: 0,
                borderColor: '#D7D9E0',
                marginLeft: 85,
                marginTop: 10,
              }}
            />
            <View style={{flex: 1, flexDirection: 'column'}}>
              <FlatList
                data={this.state.table}
                renderItem={({item}) => (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        color: '#686868',
                      }}>
                      <Text style={styles.no}> {item.no}</Text>
                      <Text style={styles.planned}>{item.planned}</Text>
                      <Text style={styles.seed}>{item.seed}</Text>
                      <Text style={styles.variety}>{item.variety}</Text>
                      <Text style={styles.color}>{item.color}</Text>
                      <Text style={styles.grower}>{item.grower}</Text>
                      <Text style={styles.field}>{item.field}</Text>
                      <Text style={styles.cwt}>{item.cwt}</Text>
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        height: 0,
                        borderColor: '#D7D9E0',
                        marginLeft: 85,
                        marginTop: 10,
                      }}
                    />
                  </View>
                )}
                keyExtractor={item => item.toString()}
                extraData={this.state}
              />
            </View>
          </View>
        </ScrollView>
        <Text style={styles.list}>Showing 1 to 20 of 135 entries</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  search: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
    marginTop: 20,
    marginRight: 10,
  },
  yash: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
    marginLeft: 85,
    marginTop: 39,
  },
  farmpo: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    color: '#686868',
    marginTop: 39,
  },
  no: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 80,
    width: 50,
  },
  planned: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 65,
    width: 100,
  },
  seed: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 72,
    width: 150,
  },
  variety: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 72,
    width: 75,
    paddingLeft: 7,
  },
  color: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 70,
    width: 125,
    paddingRight: 15,
  },
  grower: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 65,
    width: 120,
    paddingRight: 15,
  },
  field: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 60,
    width: 75,
  },
  cwt: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 85,
    width: 75,
  },
  list: {
    fontFamily: 'poppins',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    marginLeft: 85,
    color: '#686868',
  },
});

import React, {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

const MainScreen = () => {
  const [value, setvalue] = useState('0');
  const [bracketopen, setbracketopen] = useState(false);

  const handlePress = val => {
    console.log('pressed', val);

    if (val == 'AC') {
      setvalue('0');
    } else if (val == '=') {
      try {
        if (
          (value.match(/\(/g) || []).length ||
          (value.match(/\)/g) || []).length
        ) {
          if (
            value.slice(-1) == '+' ||
            value.slice(-1) == '*' ||
            value.slice(-1) == '/' ||
            value.slice(-1) == '%' ||
            value.slice(-1) == '-' ||
            value.slice(-1) == '.'
          ) {
            setvalue(`${eval(value.replace(`()`, `(0)`).slice(0, -1))}`);
          } else {
            setvalue(`${eval(value.replace(`()`, `(0)`))}`);
          }
        }
      } catch (e) {
        setvalue('format Error');
      }
    } else if (val == 'back') {
      setvalue(value.slice(0, -1));
    } else if (val == '()') {
      if (value == '0') {
        setvalue('(');
        setbracketopen(true);
      } else if (
        value.slice(-1) == '+' ||
        value.slice(-1) == '*' ||
        value.slice(-1) == '/' ||
        value.slice(-1) == '%' ||
        value.slice(-1) == '-' ||
        value.slice(-1) == '.'
      ) {
        setvalue(value + '(');
        setbracketopen(true);
      } else {
        if (bracketopen == true) {
          setvalue(value + ')');
          setbracketopen(false);
        } else {
          setvalue(value + '(');
          setbracketopen(true);
        }
      }
    } else {
      if (value == '0') {
        // if(val == '+' || val == '*' || val == '/' || val =='%' || val == '.'){
        //     setvalue(value + val)
        // }
        if (isNaN(val)) {
          setvalue(value + val);
        } else {
          setvalue(val);
        }
      } else if (isNaN(val)) {
        if (
          value.slice(-1) == '+' ||
          value.slice(-1) == '*' ||
          value.slice(-1) == '/' ||
          value.slice(-1) == '%' ||
          value.slice(-1) == '-' ||
          value.slice(-1) == '.'
        ) {
          setvalue(value.slice(0, -1) + val);
        } else {
          setvalue(value + val);
        }
      } else {
        setvalue(value + val);
      }
    }
  };
  return (
    <View style={styles.mainscreen}>
      <ScrollView style={styles.display}>
        <Text style={styles.displayText}>{value}</Text>
      </ScrollView>
      <View style={styles.keypad}>
        <View style={styles.keypadRow}>
          <Pressable onPress={() => handlePress('AC')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_btn}>AC</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('()')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>( )</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('%')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('/')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>/</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypadRow}>
          <Pressable onPress={() => handlePress('7')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('8')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('9')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('*')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>*</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypadRow}>
          <Pressable onPress={() => handlePress('4')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('5')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('6')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('-')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>-</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.keypadRow}>
          <Pressable onPress={() => handlePress('1')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('2')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('3')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('+')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>+</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.keypadRow}>
          <Pressable onPress={() => handlePress('0')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('.')}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_btn}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('back')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_btn}>&lt;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('=')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainscreen: {
    // marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#252525',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  display: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    marginBottom: 10,
    padding: 10,
  },
  displayText: {
    fontSize: 50,
    textAlign: 'right',
    color: 'black',
  },
  keypad: {
    width: '100%',
    height: '70%',
    display: 'flex',
    // flexDirection: 'row',
  },
  keypadRow: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#252525',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btn_outer: {
    width: 90,
    height: 80,
    backgroundColor: 'white',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btn1_outer: {
    width: 80,
    height: 80,
    backgroundColor: '#FF5757',
    borderRadius: 80,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2_outer: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 80,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bg2_btn: {
    color: 'white',
    backgroundColor: 'grey',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bg1_btn: {
    color: 'white',
    backgroundColor: '#FF5757',
    fontSize: 25,
    fontWeight: 'bold',
  },
  bg_btn: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default MainScreen;

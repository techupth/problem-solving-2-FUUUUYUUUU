//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    subString = s.slice(i, i + 2);

    if (s[i] == "I") sum += 1;
    if (s[i] == "V") sum += 5;
    if (s[i] == "X") sum += 10;
    if (s[i] == "L") sum += 50;
    if (s[i] == "C") sum += 100;
    if (s[i] == "D") sum += 500;
    if (s[i] == "M") sum += 1000;

    if (subString == "IV" || subString == "IX") sum -= 1 * 2;
    if (subString == "XL" || subString == "XC") sum -= 10 * 2;
    if (subString == "CD" || subString == "CM") sum -= 100 * 2;
  }

  return sum;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

result1;
result2;
result3;

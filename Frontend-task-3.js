var isValid = function (s) {
  //ვქმნით მასივ arr-ს, რათა შიგ დავფუშოთ ან/და ამოვშალოთ ელემენტები
  let arr = [];
  for (let b of s) {
    if (arr.length === 0) {
      arr.push(b);
      continue;
    }
    //თუ პირველი ელემენტი იწყება '(' ან '[' ან '{' ავტომატურად ვფუშავთ მასივში.
    if (b == "(" || b == "[" || b == "{") {
      arr.push(b);
      continue;
    }
    //slice(-1)-ით ვპოულობთ მასივში მყოფ ბოლო ელემენტს, რომელსაც ვადარებთ მასივში მყოფ პირველ ელემენტთან (b==")", b=="]", b=="}"). თუ ფრჩხილები სხვადასხვა მიმართულებით იყურება მაშინ ვშლით მასივიდან. ამის შესრულება switch ფუნქციითაც შეგვეძლო
    if (
      (b == ")" && arr.slice(-1) == "(") ||
      (b == "]" && arr.slice(-1) == "[") ||
      (b == "}" && arr.slice(-1) == "{")
    )
      arr.pop();
    else {
      return false;
    }
  }
  //თუ მასივში ელემენტების რაოდენობა 0-ის ტოლი იქნება ვაბრუნებთ "true"-ს, წინააღმდეგ შემთხვევაში "false"-ს.
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};

const output = isValid("()"); //true

console.log(output);

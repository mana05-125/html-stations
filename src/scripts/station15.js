async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  const result = await test(userList);
  return result;
}

function test(userList) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // userList からフルネームを作成して返す
      const fullNames = userList.map(buildFullName); // =userList.map(user => `${user.family_name} ${user.first_name}`)
      resolve(fullNames);
    }, 3000);
  });
}

function buildFullName(data) {
  // Station14解答
  data.full_name = data.family_name + " " + data.first_name;
  return data;
}

//getData().then((fullNames) => {
//  const resultList = document.getElementById("result");
//  fullNames.forEach((name) => {
//    const listItem = document.createElement("li");
//    listItem.textContent = name;
//    resultList.appendChild(listItem);
//  });
//});  =userList.map(user => `${user.family_name} ${user.first_name}`) にしてfunction buildFullName... が無いときは単にフルネームの文字列を返してるからこのコードになる

//getData().then((users) => {
//  const resultList = document.getElementById("result");
//  users.forEach((user) => {
//    const listItem = document.createElement("li");
//    listItem.textContent = user.full_name;
//    resultList.appendChild(listItem);
//  });
//});
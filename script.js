const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((item) => console.log(item.name));
  }
  
  // 2. Add Data
  function addData() {
    function addNewData(name, age, profession) {
      let obj = {
        name,
        age,
        profession,
      };
      data.push(obj);
    }
    const name = prompt(`Enter Name : `);
    const age = Number(prompt(`Enter age : `));
    const profession = prompt(`Enter profession : `);
    addNewData(name, age, profession);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let i = 0;
    while (i < data.length) {
      if (data[i].profession === "admin") {
        data.splice(i, 1);
      } else i++;
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const arr1 = [2, 3, 6, 5, 4];
    const arr2 = [5, 8, 6, 9];
  
    const result = [...arr1, ...arr2];
    console.log(result);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    data.forEach((obj) => (sum += Number(obj.age)));
    const average = Math.round(sum / data.length);
    console.log(average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let isAbove25=false;
    data.forEach((obj) => {
      if (obj.age > 25) isAbove25=true;
    });
    console.log(isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let mp = {};
  
    data.forEach((obj) => {
      if (!mp[obj.profession]) {
        console.log(obj.profession);
        mp[obj.profession] = true;
      }
    });
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((obj1, obj2) => obj1.age - obj2.age);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((obj) => {
      if (obj.name === "john") {
        obj.profession = "manager";
      }
    });
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let totalCnt = 0;
    data.forEach((obj) => {
      if (obj.profession === "developer" || obj.profession === "admin")
        totalCnt++;
    });
    console.log(totalCnt);
  }
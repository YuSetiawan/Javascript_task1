// question
let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
};

// answer of point a
let newData = {
  ...data,
  name: 'Yusuf Setiawan',
  email: 'ysfstiawan@gmail.com',
  hobbies: ['jogging', 'swimming', 'cycling'],
};

// const biodata = {...data, ...newData};
console.log(newData);

// answer of point b

const {street, city} = data.address;

console.log(`Leanne Graham live at ${street} street in ${city}`);

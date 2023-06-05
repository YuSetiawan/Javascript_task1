const angka = 8;
const string = '7';

const printTriangleWithNumber = (num) => {
  if (typeof num !== 'number') {
    console.log('Parameter harus angka!');
  } else if (typeof num === 'number') {
    for (let i = num; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j + ' ';
      }
      console.log(row);
    }
  }
};

printTriangleWithNumber(angka);
printTriangleWithNumber(string);

//splice er sahajje array theke ekta ongso kete 
// remove elements from an array 
// and if necessary, inserts new elements in their place
// returning the deleted elements
// will change the original array
//er sahajje array er majhkhan ba jekono index number theke item badd deya jay 

const friend = [12,35,15,15,38,16,33,66,64,18,48,55,26];
console.log('Original array before splie:',friend);
const partial = friend.splice(2, 5 ,66,52,14); 
console.log('Splie Part:',partial);
console.log('Current Array after splie:',friend);

// splice er khettre 
// VarName.splice(startindex, dlt-itm-num, add-items,add-iteams);

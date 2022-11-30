export default function ArrayPage() {
  const myArray = ['asd', true, null, undefined, 200];
  myArray.forEach((element) => {
    console.log(element);
  });
  myArray.push('push', 5);
  myArray.unshift('start');
  console.log(myArray);
  return myArray.length > 0 ? 'Array is not empty' : 'Array empty';
}

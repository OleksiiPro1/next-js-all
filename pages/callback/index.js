export default function CallbackAwait() {
  setTimeout(() => console.log('Hello'), 5000);

  const world = () => console.log('World!');
  setTimeout(world, 8000);

  const person = {
    name: 'Alex',
    surname: 'Pit',
    favoriteNumber: 8,
  };

  const personInfo = `My name is ${person.name} ${person.surname} and my favorite number is ${person.favoriteNumber}`;
  console.log(personInfo);

  const myFavoriteSport = 'SnowBoarding';
  const stringLength = myFavoriteSport.length;
  console.log(stringLength);
}

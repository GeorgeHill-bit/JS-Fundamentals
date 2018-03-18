// Object Methods

// let band ={
//     'name': 'Mumford and Sons',
//     "awesome": true
// };

// // // console.log(typeof band);
// // console.log(band.name);
// // console.log(band.awesome);
// // // band.name.year.salary
// // let netflix = {
// //     id: 1,
// //     name: 'Parks and Rec',
// //     seasonInfo: [
// //         episodeInfo [
// //             {episode: 1, episodeName: 'Pilot'},
// //             {episode: 2, episodeName: 'Second'}
// //         ]
// //     ]
// // }
// // console.log('All the stuff', netflix);
// // console.log('Season info', netflix.seasonInfo);
// // console.log('Episode info', netflix.name.seasonInfo.episodeInfo[0].episodeName);

// // Object create()

// let person = {
//     isHuman: false,
//     age: 52,
//     introduction: function() {
//         console.log(`My name is ${this.name}. Am I a human? ${this.isHuman}. I am ${this.age} years old.`);
//     }
// };
// let homeAddr = Object.create(person);
// homeAddr.name = "Quincy";
// homeAddr.isHuman = true;
// homeAddr.age = 53;
// let objectData = homeAddr.name;
// homeAddr.introduction();

// let address = {
//     name: 'Tom',
//     addr1: '13290 Wyandotte Lane',
//     city: 'Carmel',
//     state: 'Indiana',
//     zip: 46033,
//    intro: function() {
//         console.log(`Hello, my name is ${this.name}, and I live at );
//         ${this.addr1} ${this.city} ${this.state} ${this.zip}`);
//     }
// }
// let homeAddr = Object.create(address)
// homeAddr.addr1 = '13290 Wyandotte Lane'
// homeAddr.city = 'Carmel'
// homeAddr.state = 'Indiana'
// homeAddr.zip = 46033

// homeAddr.intro();

// Object.assign()

const first = {
    a: 1,
    b: 2,
    c: 3
};

const second = Object.assign({}, first);
console.log(second.c);


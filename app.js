// let data = [
//     {
//         Name:"Iphone1",
//         Price:125000
//     },
//     {
//         Name:"Iphone2",
//         Price:1250500
//     },{
//         Name:"Iphone3",
//         Price:125000
//     },{
//         Name:"Iphone4",
//         Price:125000
//     },{
//         Name:"Iphone5",
//         Price:125000
//     },{
//         Name:"Iphone6",
//         Price:125000
//     },{
//         Name:"Iphone7",
//         Price:125000
//     },{
//         Name:"Iphone8",
//         Price:125000
//     },{
//         Name:"Iphone9",
//         Price:125000
//     },{
//         Name:"Iphone10",
//         Price:125000
//     },
//     {
//         Name:"Iphone11",
//         Price:125000
//     }
// ]
// var search = () => {
//     var input = document.getElementById('inp1').value;
//     var element = data.filter(a => a.Name === input);
//     console.log(element);
// }
// sessionStorage.setItem("name","Khizar");
// for(var i =0;i<data.length;i++){
//     for(var key in data[i]){
//         document.write(key,":",data[i][key],"<br>")
//     }
// }


var login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            console.log("user  ===> ",user.displayName);
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}

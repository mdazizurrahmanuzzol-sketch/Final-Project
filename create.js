// const handleCreateUser=(event)=>{
// event.preventDefault();
// const userName=document.getElementById('name').value;
// const userId=document.getElementById('id').value;
// const userPassword=document.getElementById('password').value;
// const userImage=document.getElementById('image').value;
// const userInfo={
//     userId:userId,
//     userName:userName,
//     userPassword:userPassword,
//     userImage:userImage,
// }
// console.log(userInfo);

// }
const handleCreateUser = (event) => {
    event.preventDefault();

    const userName = document.getElementById('name').value;
    const userId = document.getElementById('id').value;
    const userPassword = document.getElementById('password').value;
    const userImage = document.getElementById('image').value;

    const userInfo = {
        userId,
        userName,
        userPassword,
        userImage
    };

    fetch("http://localhost:5000/createUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert(data.message);
    })
    .catch(err => {
        console.log(err);
        alert("Something went wrong!");
    });
}

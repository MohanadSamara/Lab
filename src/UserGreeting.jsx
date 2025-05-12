function UserGreeting(props) {
 
    if(props.isLoggedIn) {
        return <h1>Welcome , {props.userName}!</h1>;
    }

    else{
        return <h1>Please log in.</h1>;
    }


}

export default UserGreeting;
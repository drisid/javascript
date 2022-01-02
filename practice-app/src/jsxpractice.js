function formatName(userName) {
    return userName.firstName + ' ' + userName.lastName;
}

function formatAddress(userAddress){
    return userAddress.street + ' ' + userAddress.city + ' ' + userAddress.state + ' ' + userAddress.pincode + ' ' + userAddress.country;
}

const userName = {
        firstName : 'Dhrithi',
        lastName : 'MG'
};

const userAddress = {
        street : '12, 1st cross Road Avani Sringeri Nagar',
        city : 'Bangalore',
        state : 'Karnataka',
        pincode: '560076',
        country : 'India'
};

//const userNameDetails = (<h1> Welcome, {formatName(userName)}</h1>);
//const userAddressDetails = ( <p> Address : {formatAddress(userAddress)}</p>);

const userDetails = (
<div>
    <h1> Welcome, {formatName(userName)}</h1>
    <p> Address : {formatAddress(userAddress)}</p>
</div>)

export default userDetails
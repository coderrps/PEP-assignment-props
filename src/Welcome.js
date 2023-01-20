import React from 'react';

const WelcomeComponent=({name, regno})=>{
    return (
        <div>
            <h1>Hey, {name} !</h1>
            <h2>Welcome to College!</h2>
            <h2>Registration Number: {regno}</h2>
        </div>
    )
}
export default WelcomeComponent;
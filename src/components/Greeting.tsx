import React from 'react';

interface GreetingProps {
    name: String;
    }

const Greeting: React.FC<GreetingProps> = ({name}) => {
    return <h1>Sri {name}!</h1>;
    };

export default Greeting;

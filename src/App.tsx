import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'

const App: React.FC = () => {
        return (
            <div>
            <Greeting name="Ganeshaya Namaha" />
            </div>
            );
    };

export default App;

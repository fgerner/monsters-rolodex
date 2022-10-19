import './App.css';
import {useEffect, useState} from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

const App = () => {
    const [searchFeild, setSearchFeild] = useState('');
    const [monsters, setMonsters] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setMonsters(users));

    }, [])

    const onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        setSearchFeild(searchString);
    };

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchFeild);
    });

    return (
        <div className="App">
            <h1 className={'app-title'}>Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder={'Search name'}
                className={'monster-search-box'}
            />
            <CardList monsters={filteredMonsters}/>
        </div>

    )
};

export default App;

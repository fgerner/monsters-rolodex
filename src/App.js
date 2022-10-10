import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchString: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => {
                    return {monsters: users};
                }));
    }

    onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchString};
        })
    };

    render() {
        const {monsters, searchString} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchString);
        });
        return (
            <div className="App">
                <SearchBox onChangeHandler={onSearchChange} placeholder={'Search name'} className={'monster-search-box'} />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;

import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list";

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
                <input
                    className={'search-box'}
                    type={'search'}
                    placeholder={'search name'}
                    onChange={onSearchChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;

import './App.css';
import {Component} from "react";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchString: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('component did mount')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => {
                    return {monsters: users};
                },
                () => {
                    console.log(this.state)
                }));
    }

    render() {
        console.log('render')
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchString);
        });
        return (
            <div className="App">
                <input
                    className={'search-box'}
                    type={'search'}
                    placeholder={'search name'}
                    onChange={(event) => {
                        const searchString = event.target.value.toLowerCase();
                        this.setState(() => {
                            return {searchString};
                        })
                    }}/>
                {filteredMonsters.map((monster) => {
                    return <div key={monster.name}><h1>{monster.name}</h1></div>
                })
                }
            </div>
        );
    }
}

export default App;

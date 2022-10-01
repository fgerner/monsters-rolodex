import './App.css';
import {Component} from "react";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: []
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
        return (
            <div className="App">
                <input className={'search-box'} type={'search'} placeholder={'search name'} onChange={(event) => {
                    console.log(event.target.value)
                }}/>
                {this.state.monsters.map((monster) => {
                    return <div key={monster.name}><h1>{monster.name}</h1></div>
                })
                }
            </div>
        );
    }
}

export default App;

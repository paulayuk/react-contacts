import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
              <Contacts contacts={contacts} />
            </div>
        )
    }
}

export default App;

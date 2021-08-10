import './App.css';

const App = () => {

    const dynamicStyle = {
        color: 'red',
        backgroundColor: 'yellow'
    }

    const str = 'Welcome to iCode Guru';
    const num =  4 + 7;
    const obj = {name: 'hamid', age: 50};
    const arr = ['hamid', 'raza', 'hassan', 40, 56];

    return (
        <>
            <p style={{ color: 'red', backgroundColor: 'yellow' }}>
                {str}
            </p>
            <p style={dynamicStyle}>This is my Second Component {num}</p>
            <p className="component-style">This is my Third Component {arr}</p>
            <p className="global-css">This is my Fourth Component {obj.name}, {obj.age}</p>
        </>
    );
}

export default App;
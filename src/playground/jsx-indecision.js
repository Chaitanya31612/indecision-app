console.log('App js is running')

// JSX JavaScript XML
const app = {
    title: 'Indecision-app',
    subtitle: 'new update for indecision app',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        render()
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title.toUpperCase()}</h1>
            {app.subtitle && <p>{app.subtitle.toUpperCase()}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options provided'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
               {
                    app.options.map((option) => <li key={option}>{option}</li>)
               } 
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

render();
import "./App.css";
import { useState } from "react";

const initialState = {
    email: "",
    password: "",
    repeatPassword: "",
};
const useStore = () => {
    const [state, setState] = useState(initialState);
    return {
        getState: () => state,
        updateState: (fieldName, newValue) =>
            setState({ ...state, [fieldName]: newValue }),
    };
};

const setData = (formData) => {
    console.log(formData);
};

function App() {
    const { getState, updateState } = useStore();

    const onSubmit = (event) => {
        event.preventDefault();
        setData(getState());
    };
    const { email, password, repeatPassword } = getState();
    const onChange = ({ target }) => {
        updateState(target.name, target.value);
        if (true) {
        }
    };

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="repeatPassword"
                    value={repeatPassword}
                    placeholder="Повтор пароля"
                    onChange={onChange}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default App;

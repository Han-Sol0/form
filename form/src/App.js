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
    const [loginError, setLoginError] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        setData(getState());
    };
    const { email, password, repeatPassword } = getState();

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                {loginError && <div className="App-link">{loginError}</div>}
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={({ target }) => {
                        updateState(target.name, target.value);

                        let error = null;

                        if (
                            !/^\S{2,}@\S{2,}\.[a-zA-Z]{2,10}$/.test(
                                target.value
                            )
                        ) {
                            error = "Неверный логин.";
                        }
                        setLoginError(error);
                    }}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={({ target }) => {
                        updateState(target.name, target.value);

                        let error = null;

                        if (
                            !(
                                /^\S+$/.test(target.value) &&
                                /[a-zA-Z]+/.test(target.value) &&
                                /[0-9]+/.test(target.value) &&
                                /[\W_]+/.test(target.value)
                            )
                        ) {
                            error =
                                "Пароль не удовлетворяет политикам безопасности.";
                        }
                        setLoginError(error);
                    }}
                />
                <input
                    type="password"
                    name="repeatPassword"
                    value={repeatPassword}
                    placeholder="Повтор пароля"
                    onChange={({ target }) => {
                        updateState(target.name, target.value);

                        let error = null;

                        if (target.value !== password) {
                            error = "Пароли не совпадают.";
                        }
                        setLoginError(error);
                    }}
                />
                <button type="submit" disabled={loginError !== null}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
}

export default App;

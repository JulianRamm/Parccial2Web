import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import MovieList from "./components/MovieList";

ReactDOM.render(
    <IntlProvider locale = "es-Es" messages= {localeEsMessages}>
        <MovieList/>
    </IntlProvider>,  document.getElementById("root"));

ServiceWorkerRegistration.register();
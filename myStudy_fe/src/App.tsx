import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { mainRouter } from "./router/mainRouter";
import { store } from "./global/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const App = () => {
  return (
    <div>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={mainRouter} />
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
};

export default App;

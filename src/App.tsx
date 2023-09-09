import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import DashBoard from "./pages/DashBoard";
import { store } from "./store";
import { Provider } from "react-redux";
import Services from "./components/Services";
import Form from "./pages/Form";

function App() {
	return (
		<div className='h-screen'>
			<Provider store={store}>
				<ApolloProvider client={client}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<DashBoard />}>
                <Route path="/" element={<Services />}/>
                <Route path="/form" element={<Form />}>
                  <Route path="/form"element={<Form />}/>
                  <Route path="/form/inshamake"element={<Form />}/>
                  <Route path="/form/approve"element={<Form />}/>
                </Route>
              </Route>
						</Routes>
					</BrowserRouter>
				</ApolloProvider>
			</Provider>
		</div>
	);
}

export default App;

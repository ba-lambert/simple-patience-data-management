import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
function DashBoard() {
	return (
		<div className='flex flex-col space-y-5 w-screen justify-center items-center'>
			<Nav />
			<SearchBar />
			<div className="w-screen px-20">
				<Outlet />
			</div>
		</div>
	);
}

export default DashBoard;

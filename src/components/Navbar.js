import { Link } from 'react-router-dom'
const Navbar = () => {



    return (
        <div className="flex  justify-evenly bg-gray-100 h-24 border-b-4	border-y-yellow-400	">
            <span className="w-80 text-center h-12 rounded-2xl text-3xl bg-blue-400  my-auto  border-b-4	 border-b-yellow-500 text-white">LOGIN && REGISTER</span>
            <div className="my-auto flex   gap-x-2		" >
                <Link to='/login' className="w-40  py-2 h-12 rounded-2xl text-xl bg-blue-700  border-b-4 text-center border-b-yellow-500

                 text-white" >LOGIN</Link> 
                <Link to='/' className="w-40  py-2 h-12 rounded-2xl text-xl bg-blue-700 border-b-4 text-center border-b-yellow-500

                 text-white" >REGISTER</Link> 
                {/* <Link to='/login'>Login</Link>
                <Link to='/'>Register</Link> */}


            </div>
        </div>
    )
}


export default Navbar
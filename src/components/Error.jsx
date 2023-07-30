import { Link } from "react-router-dom";

const Error = () => {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10">
      <div className="flex gap-2 items-center text-xl font-poppins">
        <div>404</div>
        <span className="text-4xl">|</span>
        <h1>Page Not Found</h1>
      </div>
      <button className="cursor-pointer hover:scale-110"><i className="fa-solid fa-arrow-left fa-xl align-baseline"></i> <Link className="text-2xl" to={'/'}>Back</Link></button>
    </div>
  )
}

export default Error;
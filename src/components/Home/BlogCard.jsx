import {Link} from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div>
       
        <section className="card">
          <img className="w-full rounded m-auto h-52" src={props.image} alt="" />
          <h5 className="font-bold text-secondary mt-4">{props.heading}</h5>
          <p className=" text-sm">{props.text}</p>
          <div className="flex justify-end my-6">
          <Link className="bg-tetiary border-tetiary border-2 text-center p-2 font-bold text-secondary rounded px-6 py-2 hover:bg-transparent hover:border-secondary hover:border-2">{props.button}</Link>
        </div>
    </section>
    
    </div>
  )
}

export default BlogCard
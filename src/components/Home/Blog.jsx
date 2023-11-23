import BlogCard from "../Home/BlogCard";
import pic from "../../assets/blog-1.jpg";
import pic1 from "../../assets/blog-2.jpg";
import pic2 from "../../assets/blog-3.jpg"


const Blog = () => {
  return (
    <div>
        <section className=" my-4 mx-4">
        <div className="my-10 mx-5">
            <h1 className="text-2xl font-bold">Our Latest Blog</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia.</p>
        </div>
        <div className="mt-8 items-center justify-center px-4 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          <BlogCard image={pic} heading="How to Consult With Doctor?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam magni, quas molestiae doloribus non reici officiis enim illum." button="Read More" />
          <BlogCard image={pic1} heading="The Best Medical Team." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam magni, quas molestiae doloribus non reici debitis officiis enim illum." button="Read More" />
          <BlogCard image={pic2} heading="Advance Quality Machine." text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam magni, quas molestiae doloribus non reici debitis officiis enim illum." button="Read More" />

        </div>
        </section>
    </div>
  )
}

export default Blog
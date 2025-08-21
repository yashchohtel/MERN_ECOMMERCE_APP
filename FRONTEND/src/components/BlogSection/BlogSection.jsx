import React from 'react'
import "./blogSection.css";

const blogs = [
    {
        id: 1,
        category: "Fashion",
        title: "Clothes Retail KPIs 2021 Guide for Clothes Executives.",
        author: "Mr Admin",
        date: "Apr 06, 2022",
        image: "https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?ga=GA1.1.1778038783.1750070552&semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 2,
        category: "Clothes",
        title: "Curbside fashion Trends: How to Win the Pickup Battle.",
        author: "Mr Robin",
        date: "Jan 18, 2022",
        image: "https://img.freepik.com/premium-photo/men-s-brown-leather-shoes-with-shoelaces-dark-wooden-background_77190-532.jpg?ga=GA1.1.1778038783.1750070552&semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 3,
        category: "Shoes",
        title: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
        author: "Mr Selsa",
        date: "Feb 10, 2022",
        image: "https://img.freepik.com/premium-photo/flat-lay-image-showcasing-various-charging-devices-stations-smartphones-laptops-other-gadgets-generative-ai_262708-29452.jpg?ga=GA1.1.1778038783.1750070552&semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 4,
        category: "Electronics",
        title: "Curbside fashion Trends: How to Win the Pickup Battle.",
        author: "Mr Pawar",
        date: "Mar 15, 2022",
        image: "https://img.freepik.com/free-photo/model-career-kit-still-life-top-view_23-2150217973.jpg?ga=GA1.1.1778038783.1750070552&semt=ais_hybrid&w=740&q=80",
    },
];

const BlogSection = () => {
    return (
        <section className="section blog_section">

            <div className="container blog_container">

                {blogs.map((blog) => (

                    <div key={blog.id} className="blog_card">

                        <img src={blog.image} alt={blog.title} className="blog_img" />

                        <div className="blog_content">
                            <span className="blog_category">{blog.category}</span>
                            <h3 className="blog_title">{blog.title}</h3>
                            <p className="blog_meta">
                                By {blog.author} / {blog.date}
                            </p>
                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default BlogSection
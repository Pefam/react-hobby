import ReviewsGraph from "../../assets/images/reviews-graph.png";
import { BsStarFill } from "react-icons/bs"
export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "I attended a woodworking class with this instructor, and it was an incredible experience! The techniques were explained clearly, and I left with a beautiful handcrafted piece. The environment was welcoming, and the instructor was patient and knowledgeable. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time hiring them for photography, and the results are always stunning! The photos capture such beautiful moments, and the process is smooth and enjoyable. We wouldn't go to anyone else for our family photos.",
            id: "2",
        },
    ]

    return (
        <section className="teacher-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src={ReviewsGraph}
                alt="Review graph"
            />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}
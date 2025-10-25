import { FaEye, FaStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        thumbnail_url,
        author,
        rating,
        total_view,
        details,
        tags,
    } = news;

    // Format the date
    const publishedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "short", day: "numeric" }
    );

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200">
            {/* Author Section */}
            <div className="flex items-center p-4 gap-3 bg-base-200">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full border"
                />
                <div>
                    <h3 className="font-semibold text-sm">{author.name}</h3>
                    <p className="text-xs text-gray-500">{publishedDate}</p>
                </div>

                <div className="ml-auto flex gap-4 text-xl text-gray-500">
                    <CiBookmark />
                    <FaShareAlt />

                </div>
            </div>

            {/* Image */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-56 object-cover"
                />
            </figure>

            {/* Content */}
            <div className="card-body">
                <h2 className="card-title text-lg font-bold hover:text-primary cursor-pointer">
                    {title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-outline badge-sm text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                    {details}
                </p> <Link to={`/news-details/${id}`}>Read More</Link>

                {/* Footer */}
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-yellow-500">
                        <FaStar />
                        <span className="text-sm">{rating.number}</span>
                        {rating.badge && (
                            <span className="badge badge-warning badge-sm text-white">
                                {rating.badge}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye />
                        <span className="text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

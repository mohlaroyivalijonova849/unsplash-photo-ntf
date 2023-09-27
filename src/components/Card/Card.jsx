import React from "react";

function Card({ src, alt, desc, approved, likes, tags, color, user }) {
  return (
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
      <figure>
        <img
          src={src}
          alt={alt}
          className="w-[384px] h-[227px] object-cover rounded-box"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">
            {user}
            {approved && <div className="badge badge-success">{approved}</div>}
          </h2>
          <div
            className="w-[30px] h-[30px] rounded-full"
            style={{ background: `${color}` }}
          ></div>
        </div>
        <p>{alt}</p>
        <div className="flex items-center justify-between">
          <div className="stats overflow-hidden justify-start">
            <div className="stat p-1 flex flex-col items-center justify-center">
              <div className="stat-title text-[14px] font-bold">
                Total Likes
              </div>
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>

              <div className="stat-value text-primary text-[18px]">{likes}</div>
            </div>
          </div>
          <div className="card-actions flex flex-wrap justify-end">
            {tags.map((item, index) => (
              <div className="badge badge-outline" key={index}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

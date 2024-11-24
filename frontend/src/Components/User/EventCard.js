import React from "react";

function EventCard({ event, onClick }) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 mb-6 cursor-pointer transition-transform transform hover:scale-105 duration-300"
      onClick={onClick}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{event.title}</h3>
      <p className="text-gray-600 mb-6 text-center">{event.description}</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {event.images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${event.title} - Image ${index + 1}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}

export default EventCard;

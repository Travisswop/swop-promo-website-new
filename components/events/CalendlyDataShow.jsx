"use client";
import React, { useEffect, useState } from "react";

const CenediyDatashow = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://api.calendly.com/scheduled_events?user=91d60ce8-4a4f-433e-872e-4d3ef84a756e",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzI4ODg4NjM2LCJqdGkiOiI2ZDVmZmUxYS01ZTcxLTQxNDgtYTgzYS0yYjMzMTE5NmI3YjYiLCJ1c2VyX3V1aWQiOiI1MmQyNjhmYS0wNjA2LTRlOTctOTFmNC04YmU0NzFiYzAyZTkifQ.QbAVyAtVLeplEL9tduXXv-yWJj2KNjJzCT03MOp7adnLjLhzuyQ4HY_26fN1p1IyuAt79mrFpuyWb3DAxMw_aQ `, // Replace with env variable
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Error: ${response.status} - ${errorData.title || response.statusText}`
          );
        }

        const data = await response.json();
        setEvents(data.collection || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Calendly Event Data</h1>
      {error && <p>Error: {error}</p>}
      {!error && events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.uri}>{event.name || event.start_time}</li>
          ))}
        </ul>
      ) : (
        !error && <p>No events found</p>
      )}
    </div>
  );
};

export default CenediyDatashow;

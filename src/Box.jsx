import React, { useState } from "react";


export default function Box() {
    const [hide, SetHide] = useState(false)

    return (
        <div className="max-w-xs mx-auto border rounded-2xl shadow p-4">
            <h1 onClick={() => SetHide(!hide)} className="text-xl font-bold mb-2 cursor-pointer ">Box 1</h1>
            <img
                className={
                    "w-full h-40 object-cover rounded-md mb-3 " + (hide ? "invisible" : "")
                }
                src="https://variety.com/wp-content/uploads/2013/04/ironman3_tonystark.jpg?w=1000&h=667&crop=1"
                alt="iron man"
            />

            <p
                className={
                    "text-sm text-gray-700 leading-relaxed " + (hide ? "invisible" : "")
                }
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                molestiae voluptatum, dicta itaque doloribus eveniet magnam adipisci! Sunt,
                voluptas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque molestiae voluptatum, dicta itaque doloribus eveniet magnam
                adipisci! Sunt, voluptas cum.
            </p>
        </div>
    );
}

import React, { useState } from "react";


export default function Box({title, img, content}) {
    const [hide, SetHide] = useState(false)

    return (
        <div className="max-w-xs mx-auto border rounded-2xl shadow p-4">
            <h1 onClick={() => SetHide(!hide)} className="text-xl font-bold mb-2 cursor-pointer ">{title}</h1>
            <img
                className={
                    "w-full h-40 object-cover rounded-md mb-3 " + (hide ? "invisible" : "")
                }
                src={img}
                alt="iron man"
            />

            <p
                className={
                    "text-sm text-gray-700 leading-relaxed " + (hide ? "invisible" : "")
                }
            >
                {content}
            </p>
        </div>
    );
}

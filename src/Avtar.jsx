import React, { useState } from "react";

export default function Avatar() {
  const [avatars, setAvatars] = useState([]);
  const [newAvatar, setNewAvatar] = useState("");
  const [showInput, setShowInput] = useState(false);

  const colors = [
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    "bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400",
  ];

  const isOnlyLetters = (str) => /^[A-Za-z\s]+$/.test(str);

  const addAvatar = () => {
    if (newAvatar.trim() !== "" && isOnlyLetters(newAvatar)) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setAvatars([
        ...avatars,
        {
          id: Date.now(),
          text: newAvatar.charAt(0).toUpperCase(),
          color: randomColor,
        },
      ]);
      setNewAvatar("");
      setShowInput(false);
    } else if (newAvatar.trim() !== "") {
      alert("Please enter letters only, no numbers or special characters!");
    }
  };

  const removeAvatar = (id) => {
    setAvatars(avatars.filter((a) => a.id !== id));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-8 rounded-2xl flex space-x-4">
        {avatars.map((a) => (
          <div
            key={a.id}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl ${a.color}`}
          >
            {a.text}
            <button
              onClick={() => removeAvatar(a.id)}
              className="absolute -top-1 -right-1 bg-black/70 hover:bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow"
            >
              ×
            </button>
          </div>
        ))}

        {showInput ? (
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newAvatar}
              onChange={(e) => setNewAvatar(e.target.value)}
              placeholder="Enter name"
              className="border border-white/20 bg-white/20 text-white placeholder-white/70 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={addAvatar}
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:scale-105 transition-transform"
            >
              Add
            </button>
            <button
              onClick={() => setShowInput(false)}
              className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-3 py-2 rounded-lg text-sm shadow hover:scale-105 transition-transform"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-white to-gray-200 flex items-center justify-center text-black font-bold shadow-lg hover:scale-110 transition-transform"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}

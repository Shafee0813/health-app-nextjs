"use client";
import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FaRobot, FaUser } from 'react-icons/fa';
import { IoSendSharp } from 'react-icons/io5';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setMessages((currList) =>[...currList, { role : "user" , text :message}])
      const prompt = message;
      const genAI = new GoogleGenerativeAI("");
      const model = genAI.getGenerativeModel({model : "gemini-1.5-flash"})
      const result = await model.generateContent(prompt);
      const reply = result.response.text();
      setMessages((currList) =>[...currList, {role: "model" , text : reply}]);
      // console.log(reply);
      // console.log(messages);
      setMessage('');
      } catch (error) {
      console.error("Error happened in the page:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col w-[600px] border-2 border-green-600 shadow-xl shadow-green-600 rounded-2xl '>
      <div className='flex flex-col items-center'>
      {messages.map((i , index) => (
        <div key={index}>
          <p className={`${i.role === "user" ? "text-right bg-green-900" : "bg-green-300 text-black gap-3 items-center"} message-styles flex`}>
          <span>{i.role === "model" ? <FaRobot />   : ""}</span>
          {i.text}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      </div>

      <form onSubmit={handleSubmit} className='flex rounded-b-xl  bg-green-600 justify-center'>
        <input type="text" value={message} placeholder = "" onChange={(e) => setMessage(e.target.value)} className='w-full outline-none p-3 rounded-xl bg-green-600' />
        <button type="submit" disabled={loading} className='p-2 rounded-full px-4 border-1 border-white bg-green-800'>
          <IoSendSharp/>
        </button>
      </form>
      
    </div>
  );
}

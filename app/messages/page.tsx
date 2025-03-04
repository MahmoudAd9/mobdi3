'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Send, Paperclip, MoreVertical, Phone, Video, Search } from 'lucide-react';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const contacts = [
    {
      id: 1,
      name: 'Christopher Campbell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      lastMessage: 'In front of the Bar, about which one?',
      time: '10:30 AM',
      unread: true,
      online: true,
    },
    {
      id: 2,
      name: 'Houcine Ncib',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      lastMessage: 'What do you have planned this weekend?',
      time: 'Yesterday',
      unread: false,
      online: false,
    },
    {
      id: 3,
      name: 'Kelly Sikkema',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      lastMessage: 'How would you describe yourself in three words?',
      time: 'Apr 12',
      unread: false,
      online: true,
    },
    {
      id: 4,
      name: 'Ethan Hoover',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      lastMessage: 'How do you relieve stress?',
      time: 'Apr 10',
      unread: false,
      online: false,
    },
    {
      id: 5,
      name: 'Joseph Pearson',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
      lastMessage: "What's your sign?",
      time: 'Apr 8',
      unread: false,
      online: true,
    },
  ];
  
  const messages = [
    {
      id: 1,
      chatId: 1,
      sender: 'them',
      content: 'Hey, How are you?',
      time: '10:30 AM',
      date: '01-01-2022',
    },
    {
      id: 2,
      chatId: 1,
      sender: 'me',
      content: 'I was asking for your New Year Plans, ask we are going to host a party.',
      time: '10:32 AM',
      date: '01-01-2022',
    },
    {
      id: 3,
      chatId: 1,
      sender: 'them',
      content: 'I am fine, How about you?',
      time: '10:33 AM',
      date: '01-01-2022',
    },
    {
      id: 4,
      chatId: 1,
      sender: 'me',
      content: 'Yayy, Great I would love to join the party',
      time: '10:35 AM',
      date: '01-01-2022',
    },
    {
      id: 5,
      chatId: 1,
      sender: 'them',
      content: "Great! Let's meet in the party!",
      time: '10:36 AM',
      date: '01-01-2022',
    },
    {
      id: 6,
      chatId: 1,
      sender: 'me',
      content: 'Hey, I am here',
      time: '10:40 AM',
      date: '01-01-2022',
    },
    {
      id: 7,
      chatId: 1,
      sender: 'them',
      content: 'Where are you, exactly!',
      time: '10:45 AM',
      date: '01-01-2022',
    },
  ];
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const chatMessages = messages.filter(msg => msg.chatId === selectedChat);
  const selectedContact = contacts.find(contact => contact.id === selectedChat);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // In a real app, you would send this message to your backend
    console.log('Sending message:', message);
    
    // Clear the input
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold mb-4">MESSAGES</h1>
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {filteredContacts.map(contact => (
                <div 
                  key={contact.id}
                  className={`flex items-center p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    selectedChat === contact.id ? 'bg-purple-50' : ''
                  }`}
                  onClick={() => setSelectedChat(contact.id)}
                >
                  <div className="relative">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image 
                        src={contact.avatar} 
                        alt={contact.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-gray-900">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread && (
                    <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat Area */}
          {selectedChat ? (
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image 
                        src={selectedContact?.avatar || ''} 
                        alt={selectedContact?.name || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {selectedContact?.online && (
                      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{selectedContact?.name}</h3>
                    <p className="text-xs text-gray-500">
                      {selectedContact?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Video className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                <div className="space-y-4">
                  {chatMessages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      {msg.sender === 'them' && (
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image 
                            src={selectedContact?.avatar || ''} 
                            alt={selectedContact?.name || ''}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === 'me' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-white text-gray-800'
                      }`}>
                        <p>{msg.content}</p>
                        <p className={`text-xs mt-1 text-right ${
                          msg.sender === 'me' ? 'text-purple-200' : 'text-gray-500'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <button 
                    type="button"
                    className="text-gray-500 hover:text-gray-700 mr-2"
                  >
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <input 
                    type="text" 
                    className="flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="ml-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
                    disabled={message.trim() === ''}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-500">Choose from your existing conversations or start a new one.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
'use client'
import React, { useState, useRef, useEffect } from "react";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-8 py-3 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="w-9 h-9 object-contain border-2 rounded-full" />
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Land Venture
        </h1>
      </div>

      {/* Right Side Desktop */}
      <div className="hidden md:flex items-center gap-6 relative">
        
        {/* Notification */}
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* User */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          ref={dropdownRef}
        >
          <img
            src="/user.png"
            alt="user"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium">Ali</span>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-lg py-2 border">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Settings
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-52 md:hidden">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/user.png"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">ALI</span>
          </div>
          <button className="block w-full text-left py-2 hover:text-blue-600">
            Notifications
          </button>
          <button className="block w-full text-left py-2 hover:text-blue-600">
            Settings
          </button>
          <button className="block w-full text-left py-2 text-red-500">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
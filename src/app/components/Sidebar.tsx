import React from "react";
import "./Sidebar.css"; // Import the CSS for styling

interface SidebarProps {
    activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
    return (
        <div className="sidebar">
            <div
                className={`icon ${activeSection === "first" ? "active" : ""}`}
            >
                🏠
            </div>
            <div
                className={`icon ${activeSection === "second" ? "active" : ""}`}
            >
                👤
            </div>
            <div
                className={`icon ${activeSection === "third" ? "active" : ""}`}
            >
                📷
            </div>
            <div
                className={`icon ${activeSection === "fourth" ? "active" : ""}`}
            >
                🎨
            </div>
        </div>
    );
};

export default Sidebar;

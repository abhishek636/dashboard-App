import React from "react";
import { NavLink } from "react-router-dom";
function Sidebar() {
    return (
      
        
            <ul className="sidebar">
                <li>
                    <NavLink exact className="active" to="/">
                        <span class="material-symbols-outlined">home</span>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact className="active" to="/articles">
                        <span class="material-symbols-outlined">article</span>
                        <span>Articles</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact className="active" to="/peoples">
                        <span class="material-symbols-outlined">group</span>
                        <span>People</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact className="active" to="/books">
                        <span class="material-symbols-outlined">library_books</span>
                        <span>Books</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact className="active" to="/help">
                        <span class="material-symbols-outlined">help</span>
                        <span>Help & Support</span>
                    </NavLink>
                </li>
            </ul>
        
        
    );
}

export default Sidebar;



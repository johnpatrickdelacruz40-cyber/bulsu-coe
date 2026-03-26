import React, { useState, useEffect } from 'react';
import { getDynamicFacultyData, saveDynamicFacultyData } from '../data/facultyManager';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [activeDept, setActiveDept] = useState("Civil Engineering");

  // Temporary states for new entries
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Faculty");

  useEffect(() => {
    setData(getDynamicFacultyData());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") { // Simple password for presentation
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password");
    }
  };

  const handleDelete = (category, index, dept = null) => {
    const newData = { ...data };
    if (dept) {
      newData.departments[dept].splice(index, 1);
    } else {
      newData[category].splice(index, 1);
    }
    setData(newData);
    saveDynamicFacultyData(newData);
    alert("Deleted successfully! The People page has automatically adjusted.");
  };

  const handleAdd = (category, dept = null) => {
    if (!newName.trim() || !newRole.trim()) return alert("Please fill both fields!");
    
    const newData = { ...data };
    const newItem = { name: newName, role: newRole };

    if (dept) {
      newData.departments[dept].push(newItem);
    } else {
      newData[category].push(newItem);
    }

    setData(newData);
    saveDynamicFacultyData(newData);
    setNewName("");
    alert("Added successfully! The People page has automatically made space for them.");
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-40 min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <form onSubmit={handleLogin} className="p-10 bg-[#111] rounded-3xl border border-white/10 text-center shadow-2xl">
          <h2 className="text-white text-2xl font-black uppercase mb-2">Admin Portal</h2>
          <p className="text-gray-400 text-sm mb-6">Enter password to manage content.</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-4 rounded bg-black border border-white/20 text-white" placeholder="Password (admin123)" />
          <button type="submit" className="w-full py-3 bg-red-800 text-white font-bold rounded uppercase tracking-widest text-xs">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-red-600">Faculty Manager</h1>
        <p className="text-gray-400 mb-10">Changes made here instantly update the layout of the People page.</p>

        {/* FACULTY SECTION */}
        <div className="mb-12 p-8 bg-[#111] rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-amber-500 mb-6 uppercase">Manage Department Faculty</h2>
          
          <select value={activeDept} onChange={(e) => setActiveDept(e.target.value)} className="w-full p-3 rounded bg-black border border-white/20 text-white mb-6 font-bold">
            {Object.keys(data.departments).map(dept => <option key={dept} value={dept}>{dept}</option>)}
          </select>

          {/* List existing */}
          <div className="space-y-2 mb-8">
            {data.departments[activeDept].map((member, idx) => (
              <div key={idx} className="flex justify-between items-center bg-black p-4 rounded border border-white/5">
                <div>
                  <p className="font-bold text-white">{member.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{member.role}</p>
                </div>
                <button onClick={() => handleDelete('departments', idx, activeDept)} className="text-xs text-red-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Delete</button>
              </div>
            ))}
          </div>

          {/* Add New */}
          <div className="flex flex-col md:flex-row gap-4 border-t border-white/10 pt-6">
            <input type="text" placeholder="Full Name" value={newName} onChange={(e) => setNewName(e.target.value)} className="flex-1 p-3 rounded bg-black border border-white/20 text-white" />
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="flex-1 p-3 rounded bg-black border border-white/20 text-white">
              <option value="Program Chair">Program Chair</option>
              <option value="Faculty">Faculty</option>
              <option value="Part-time Instructor">Part-time Instructor</option>
              <option value="Guest Lecturer">Guest Lecturer</option>
            </select>
            <button onClick={() => handleAdd('departments', activeDept)} className="px-8 py-3 bg-amber-600 text-white font-bold rounded uppercase tracking-widest text-xs">Add</button>
          </div>
        </div>

        {/* OFFICIALS SECTION */}
        <div className="mb-12 p-8 bg-[#111] rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-red-500 mb-6 uppercase">Manage College Officials</h2>
          <div className="space-y-2 mb-8">
            {data.officials.map((official, idx) => (
              <div key={idx} className="flex justify-between items-center bg-black p-4 rounded border border-white/5">
                <div>
                  <p className="font-bold text-white">{official.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{official.role}</p>
                </div>
                <button onClick={() => handleDelete('officials', idx)} className="text-xs text-red-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Delete</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}import React, { useState, useEffect } from 'react';
import { getDynamicFacultyData, saveDynamicFacultyData } from '../data/facultyManager';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [activeDept, setActiveDept] = useState("Civil Engineering");

  // Temporary states for new entries
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Faculty");

  useEffect(() => {
    setData(getDynamicFacultyData());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") { // Simple password for presentation
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password");
    }
  };

  const handleDelete = (category, index, dept = null) => {
    const newData = { ...data };
    if (dept) {
      newData.departments[dept].splice(index, 1);
    } else {
      newData[category].splice(index, 1);
    }
    setData(newData);
    saveDynamicFacultyData(newData);
    alert("Deleted successfully! The People page has automatically adjusted.");
  };

  const handleAdd = (category, dept = null) => {
    if (!newName.trim() || !newRole.trim()) return alert("Please fill both fields!");
    
    const newData = { ...data };
    const newItem = { name: newName, role: newRole };

    if (dept) {
      newData.departments[dept].push(newItem);
    } else {
      newData[category].push(newItem);
    }

    setData(newData);
    saveDynamicFacultyData(newData);
    setNewName("");
    alert("Added successfully! The People page has automatically made space for them.");
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-40 min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <form onSubmit={handleLogin} className="p-10 bg-[#111] rounded-3xl border border-white/10 text-center shadow-2xl">
          <h2 className="text-white text-2xl font-black uppercase mb-2">Admin Portal</h2>
          <p className="text-gray-400 text-sm mb-6">Enter password to manage content.</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-4 rounded bg-black border border-white/20 text-white" placeholder="Password (admin123)" />
          <button type="submit" className="w-full py-3 bg-red-800 text-white font-bold rounded uppercase tracking-widest text-xs">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-red-600">Faculty Manager</h1>
        <p className="text-gray-400 mb-10">Changes made here instantly update the layout of the People page.</p>

        {/* FACULTY SECTION */}
        <div className="mb-12 p-8 bg-[#111] rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-amber-500 mb-6 uppercase">Manage Department Faculty</h2>
          
          <select value={activeDept} onChange={(e) => setActiveDept(e.target.value)} className="w-full p-3 rounded bg-black border border-white/20 text-white mb-6 font-bold">
            {Object.keys(data.departments).map(dept => <option key={dept} value={dept}>{dept}</option>)}
          </select>

          {/* List existing */}
          <div className="space-y-2 mb-8">
            {data.departments[activeDept].map((member, idx) => (
              <div key={idx} className="flex justify-between items-center bg-black p-4 rounded border border-white/5">
                <div>
                  <p className="font-bold text-white">{member.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{member.role}</p>
                </div>
                <button onClick={() => handleDelete('departments', idx, activeDept)} className="text-xs text-red-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Delete</button>
              </div>
            ))}
          </div>

          {/* Add New */}
          <div className="flex flex-col md:flex-row gap-4 border-t border-white/10 pt-6">
            <input type="text" placeholder="Full Name" value={newName} onChange={(e) => setNewName(e.target.value)} className="flex-1 p-3 rounded bg-black border border-white/20 text-white" />
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="flex-1 p-3 rounded bg-black border border-white/20 text-white">
              <option value="Program Chair">Program Chair</option>
              <option value="Faculty">Faculty</option>
              <option value="Part-time Instructor">Part-time Instructor</option>
              <option value="Guest Lecturer">Guest Lecturer</option>
            </select>
            <button onClick={() => handleAdd('departments', activeDept)} className="px-8 py-3 bg-amber-600 text-white font-bold rounded uppercase tracking-widest text-xs">Add</button>
          </div>
        </div>

        {/* OFFICIALS SECTION */}
        <div className="mb-12 p-8 bg-[#111] rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-red-500 mb-6 uppercase">Manage College Officials</h2>
          <div className="space-y-2 mb-8">
            {data.officials.map((official, idx) => (
              <div key={idx} className="flex justify-between items-center bg-black p-4 rounded border border-white/5">
                <div>
                  <p className="font-bold text-white">{official.name}</p>
                  <p className="text-xs text-gray-500 uppercase">{official.role}</p>
                </div>
                <button onClick={() => handleDelete('officials', idx)} className="text-xs text-red-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Delete</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
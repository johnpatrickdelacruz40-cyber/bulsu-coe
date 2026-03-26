import { collegeOfficials, collegeStaff, facultyByDepartment } from './facultyData';

// This pulls from LocalStorage (our mini-database), or uses your default data if empty!
export const getDynamicFacultyData = () => {
  const storedData = localStorage.getItem('bulsu_faculty_data');
  if (storedData) {
    return JSON.parse(storedData);
  }
  
  // Default fallback
  const defaultData = {
    officials: collegeOfficials,
    staff: collegeStaff,
    departments: facultyByDepartment
  };
  
  // Save defaults to storage on first load
  localStorage.setItem('bulsu_faculty_data', JSON.stringify(defaultData));
  return defaultData;
};

export const saveDynamicFacultyData = (newData) => {
  localStorage.setItem('bulsu_faculty_data', JSON.stringify(newData));
};
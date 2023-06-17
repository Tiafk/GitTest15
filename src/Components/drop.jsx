const clickDropOutside = (selectRef, set, bool) => {
  const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
          set(bool)
      }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
      document.removeEventListener('click', handleClickOutside);
  };
}

export default clickDropOutside;
export const headerStyles = {
  header: "w-full bg-white shadow-sm sticky top-0 z-50",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  wrapper: "flex justify-between items-center h-16",
  logo: {
    link: "flex-shrink-0 flex items-center gap-2",
    text: "font-bold text-xl text-gray-900",
    icon: "h-8 w-8 text-blue-600",
  },
  nav: {
    mobileMenuButton: "md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
    desktopContainer: "hidden md:flex md:items-center md:space-x-8",
    link: "text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
    activeLink: "text-blue-600 font-semibold",
  },
  controls: {
    container: "relative flex items-center gap-4",
    langButton: "flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors",
    dropdown: "absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 border border-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none",
    dropdownItem: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left",
    activeItem: "bg-blue-50 text-blue-700",
  }
};

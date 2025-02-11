// components/CustomSwal.tsx
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Define the styles
const customStyles = `
  .my-swal {
    font-family: 'Your preferred font', sans-serif;
  }
  .my-swal .swal2-title {
    color: #333;
    font-size: 1.5em;
  }
  .my-swal .swal2-content {
    color: #666;
  }
  .my-swal .swal2-confirm {
    background-color: #4CAF50 !important;
  }
  .my-swal .swal2-cancel {
    background-color: #f44336 !important;
  }
`;

interface CustomSwalProps {
  title: string;
  text: string;
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
}

const CustomSwal: React.FC<CustomSwalProps> = ({ title, text, icon }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Add the styles to the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);

    MySwal.fire({
      title,
      text,
      icon,
      customClass: {
        container: 'my-swal'
      }
    });

    // Cleanup function to remove the styles when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [title, text, icon]);

  if (!isMounted) {
    return null;
  }

  return null;
};

export default CustomSwal;
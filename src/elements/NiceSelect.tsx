// // import useGlobalContext from "@/hooks/use-context";
// // import React, {
// //   useState,
// //   useCallback,
// //   useRef,
// //   KeyboardEvent,
// //   MouseEvent,
// // } from "react";
// // import { useClickAway } from "react-use";

// // interface Option {
// //   id: number;
// //   option: string | number;
// // }

// // interface NiceSelectProps {
// //   options: Option[];
// //   defaultCurrent: number;
// //   placeholder?: string;
// //   className?: string;
// //   onChange: (item: Option, name: string) => void;
// //   name: string;
// // }

// // const defaultSelectValue = { id: 0, option: "Select" };

// // const NiceSelect: React.FC<NiceSelectProps> = ({
// //   options,
// //   defaultCurrent,
// //   placeholder,
// //   className,
// //   onChange,
// //   name,
// // }) => {
// //   const [open, setOpen] = useState(false);
// //   const { setNiceSelectData } = useGlobalContext();
// //   const [current, setCurrent] = useState<Option>(defaultSelectValue);
// //   const onClose = useCallback(() => {
// //     setOpen(false);
// //   }, []);

// //   const ref = useRef<HTMLDivElement>(null);
// //   useClickAway(ref, onClose);

// //   const currentHandler = (item: Option) => {
// //     setCurrent(item);
// //     onChange(item, name);
// //     setNiceSelectData(item?.option);
// //     onClose();
// //   };

// //   const handleClick = () => {
// //     setOpen((prev) => !prev);
// //   };

// //   const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
// //     if (e.key === "Enter") {
// //       setOpen((prev) => !prev);
// //     }
// //   };

// //   const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
// //     e.stopPropagation();
// //   };

// //   return (
// //     <div
// //       className={`nice-select ${className || ""} ${open ? "open" : ""}`}
// //       role="button"
// //       tabIndex={0}
// //       onClick={handleClick}
// //       onKeyPress={handleKeyPress}
// //       ref={ref}
// //     >
// //       <span className="current">
// //         {current?.id == 0 ? placeholder : current?.option}
// //       </span>
// //       <ul
// //         className="list"
// //         role="menubar"
// //         onClick={stopPropagation}
// //         onKeyPress={stopPropagation}
// //       >
// //         {options?.map((item) => (
// //           <li
// //             key={item.id}
// //             data-value={item.id}
// //             className={`option ${
// //               item.id === current?.id ? "selected focus" : ""
// //             }`}
// //             role="menuitem"
// //             onClick={() => currentHandler(item)}
// //             onKeyPress={(e: KeyboardEvent<HTMLLIElement>) => {
// //               stopPropagation(e);
// //             }}
// //           >
// //             {item.option}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default NiceSelect;



// import useGlobalContext from "@/hooks/use-context";
// import React, {
//   useState,
//   useCallback,
//   useRef,
//   KeyboardEvent,
//   MouseEvent,
//   useEffect,
// } from "react";
// import { useClickAway } from "react-use";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { RootState } from "@/redux/store";

// interface Option {
//   id: number;
//   option: string | number;
// }

// interface NiceSelectProps {
//   options: Option[];
//   defaultCurrent: number;
//   placeholder?: string;
//   className?: string;
//   onChange: (item: Option, name: string) => void;
//   name: string;
//   value?: string;
// }

// const defaultSelectValue = { id: 0, option: "Select" };
// interface Booking {
//   city: string;
//   checkIn: string;
//   checkOut: string;
//   room: number;
//   adult: number;
//   children: number;
// }

// const NiceSelect: React.FC<NiceSelectProps> = ({
//   options,
//   defaultCurrent,
//   placeholder,
//   className,
//   onChange,
//   name,
//   value,
// }) => {
//   const { bookings } = useAppSelector((state: RootState) => state.app) as { bookings: Booking[] };
//   console.log(bookings);
//   const [open, setOpen] = useState(false);
//   const { setNiceSelectData } = useGlobalContext();
//   const [current, setCurrent] = useState<Option>(defaultSelectValue);
//   const onClose = useCallback(() => {
//     setOpen(false);
//   }, []);

//   useEffect(() => {
//     if (bookings.length > 0) {
//       const currentBooking = bookings[0];
//       setCurrent({ id: 1, option: currentBooking.city });
//     }
//   }
//   , [bookings]);
  

//   const ref = useRef<HTMLDivElement>(null);
//   useClickAway(ref, onClose);

//   const currentHandler = (item: Option) => {
//     setCurrent(item);
//     onChange(item, name);
//     setNiceSelectData(item?.option);
//     onClose();
//   };

//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === "Enter") {
//       setOpen((prev) => !prev);
//     }
//   };

//   const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
//     e.stopPropagation();
//   };

//   return (
//     <div
//       className={`nice-select ${className || ""} ${open ? "open" : ""}`}
//       role="button"
//       tabIndex={0}
//       onClick={handleClick}
//       onKeyPress={handleKeyPress}
//       ref={ref}
//     >
//       <span className="current">
//         {current?.id === 0 ? placeholder : current?.option}
//       </span>
//       <ul
//         className="list"
//         role="menubar"
//         onClick={stopPropagation}
//         onKeyPress={stopPropagation}
//       >
//         {options?.map((item) => (
//           <li
//             key={item.id}
//             data-value={item.id}
//             className={`option ${
//               item.id === current?.id ? "selected focus" : ""
//             }`}
//             role="menuitem"
//             onClick={() => currentHandler(item)}
//             onKeyPress={(e: KeyboardEvent<HTMLLIElement>) => {
//               stopPropagation(e);
//             }}
//           >
//             {item.option}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NiceSelect;

import React, {
  useState,
  useCallback,
  useRef,
  KeyboardEvent,
  MouseEvent,
  useEffect,
} from "react";
import { useClickAway } from "react-use";
import useGlobalContext from "@/hooks/use-context";

interface Option {
  id: number;
  option: string | number;
}

interface NiceSelectProps {
  options: Option[];
  defaultCurrent?: number;
  placeholder?: string;
  className?: string;
  onChange: (item: Option, name: string) => void;
  name: string;
  value?: string;
}

const NiceSelect: React.FC<NiceSelectProps> = ({
  options,
  defaultCurrent,
  placeholder,
  className,
  onChange,
  name,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const { setNiceSelectData } = useGlobalContext();
  const [current, setCurrent] = useState<Option | null>(null);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, onClose);

  useEffect(() => {
    if (value) {
      const matchingOption = options.find(option => option.option === value);
      if (matchingOption) {
        setCurrent(matchingOption);
      }
    } else if (defaultCurrent !== undefined) {
      const defaultOption = options.find(option => option.id === defaultCurrent);
      if (defaultOption) {
        setCurrent(defaultOption);
      }
    }
  }, [options, value, defaultCurrent]);

  const currentHandler = (item: Option) => {
    setCurrent(item);
    onChange(item, name);
    setNiceSelectData(item?.option);
    onClose();
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setOpen((prev) => !prev);
    }
  };

  const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`nice-select ${className || ""} ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      ref={ref}
    >
      <span className="current">
        {current ? current.option : placeholder || "Select"}
      </span>
      <ul
        className="list"
        role="menubar"
        onClick={stopPropagation}
        onKeyPress={stopPropagation}
      >
        {options?.map((item) => (
          <li
            key={item.id}
            data-value={item.id}
            className={`option ${
              item.id === current?.id ? "selected focus" : ""
            }`}
            role="menuitem"
            onClick={() => currentHandler(item)}
            onKeyPress={(e: KeyboardEvent<HTMLLIElement>) => {
              stopPropagation(e);
            }}
          >
            {item.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;

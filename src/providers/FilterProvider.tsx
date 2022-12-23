import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useReducer,
} from "react";
import { onSnapshot, query, where } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { GalleryType } from "utils/Types";
import { FilterReducer } from "providers/FilterReducer";

export type FilterContextType = {
  selectedValues: string[];
  dispatch: React.Dispatch<any>;
};

const initialState: FilterContextType = {
  selectedValues: [],
  dispatch: () => {},
};
export const FilterContext = createContext<FilterContextType>(initialState);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedValues, dispatch] = useReducer(FilterReducer, []);

  return (
    <FilterContext.Provider value={{ selectedValues, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

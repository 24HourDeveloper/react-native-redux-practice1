import { combineReducers } from "redux";
import LibraryReducers from "./LibraryReducers";
import SelectedReducers from "./SelectedReducers";

export default combineReducers({
  libraries: LibraryReducers,
  selectedLibraryId: SelectedReducers
});

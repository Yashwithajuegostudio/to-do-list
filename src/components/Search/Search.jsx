import React from "react";
import { title } from "../../utils/constant";
import InputBox from "../InputBox/InputBox";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.search_container}>
      <InputBox placeholder={title.searchTitle} />
    </div>
  );
}

export default Search;

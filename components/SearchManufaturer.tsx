"use client";
import { SearchManufacturerProps } from "@/types";
import React, { useState } from "react";
import { AutoComplete } from "antd";
import { manufacturers } from "@/constants";

function SearchManufaturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const filterManufacturer = (str: string) => {
    console.log(str);
    let filteredManufacturer = [{ value: "" }];
    if (!!str) {
      filteredManufacturer = manufacturers
        .filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(str.toLowerCase().replace(/\s+/g, ""))
        )
        .map((item) => ({ value: item }));
    }

    return filteredManufacturer;
  };

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : filterManufacturer(searchText);

  const onSelect = (data: string) => {
    console.log("onSelect", data);
    setManufacturer(data);
  };

  const onChange = (data: string) => {
    setManufacturer(data);
  };
  return (
    <div className="search-manufacturer">
      <AutoComplete
        options={options}
        style={{ width: 600 }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="input here"
      />
    </div>
  );
}

export default SearchManufaturer;

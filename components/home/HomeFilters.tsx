"use client";
import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "frequent";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((items) => (
        <Button
          key={items.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === items.value
              ? "bg-primary-100 text-primary-500"
              : "background-light800_dark300 text-light-500"
          }`}
        >
          {items.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;

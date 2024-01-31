"use client";
import React, { FC, useId, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import { useTheme } from "next-themes";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const { theme, setTheme } = useTheme()

  const id = useId();
  return (
    <div>
      <Heading
        title="E Learning"
        description="E Learning is a platform for students to learn and get help from teachers"
        keywords="Programming"
        key={id}
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};

export default Page;

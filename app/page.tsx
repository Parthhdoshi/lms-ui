"use Client"
import React,{ FC, useState, useId } from "react";
import Heading from "./utils/Heading";

interface Props {

}

const Page:FC<Props> = (props) => {
  const id = useId()
  return (
    <div>
      <Heading
        title="E Learning"
        description="E Learning is a platform for students to learn and get help from teachers"
        keywords="Programming"
        key={id}
      />
      Hello World
    </div>
  )
}

export default Page
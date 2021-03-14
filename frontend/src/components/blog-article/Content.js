import React from "react";
import Image from "../elements/Image";
import List from "../elements/List";
import Paragraph from "../elements/Paragraph";
import SpecialParagraph from "../elements/SpecialParagraph";
import Title from "../elements/Title";
import BlogAction from "./BlogAction";
import {
  placeholderImage,
  withAllRumors,
  bulletArray,
  theWordOf,
  blogAction,
  midTitle,
} from "../../data";

function Content() {
  return (
    <div className="content-container">
      <BlogAction blogActionsData={blogAction} />
      <div className="paragraph-content">
        <Paragraph description={theWordOf} />
        <Paragraph description={withAllRumors} />
        <Title description={midTitle.description} style={midTitle.style} />
        <SpecialParagraph />
        <Image
          src={placeholderImage.src}
          alt={placeholderImage.alt}
          style={placeholderImage.style}
        />
        <List bullets={bulletArray} />
      </div>
      <div />
    </div>
  );
}

export default Content;

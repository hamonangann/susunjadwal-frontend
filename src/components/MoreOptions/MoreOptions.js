import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const MoreOptions = ({ items }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          data-testid="more-options-trigger"
          variant="unstyled"
          style={{ height: "100%", borderRadius: 0, minWidth: "unset" }}
        >
          <HiOutlineDotsHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent data-testid="more-options-content">
        {items.map(({ text, props }, index) => {
          return (
            <Button
              key={index}
              variant="unstyled"
              {...props}
              style={{ ...props.style, textAlign: "left", borderRadius: 0 }}
            >
              <PopoverBody>{text}</PopoverBody>
            </Button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default MoreOptions;
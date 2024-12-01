"use client";
import React, { useState } from "react";
import { DynamicIsland } from "./dynamic-island";
import {
  SocialProfileCollapsed,
  SocialProfileExpanded,
} from "./social-profile";

const DynamicIslandDemo = () => {
  const [expanded, setExpanded] = useState(false);
  const profileData = {
    name: "Sarah Parker",
    title: "Senior Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    links: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  };
  return (
    <div>
      <DynamicIsland
        expanded={expanded}
        onExpandedChange={setExpanded}
        collapsedContent={
          <SocialProfileCollapsed
            name={profileData.name}
            imageUrl={profileData.imageUrl}
          />
        }
        expandedContent={<SocialProfileExpanded {...profileData} />}
        collapsedSize={{ width: 180, height: 48 }}
        expandedSize={{ width: 320, height: 200 }}
        animationProps={{
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 300,
          },
        }}
      />
    </div>
  );
};

export default DynamicIslandDemo;

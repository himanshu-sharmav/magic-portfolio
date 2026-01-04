"use client";

import React from "react";
import {
  Column,
  Row,
  Text,
  Heading,
  Tag,
  Icon,
} from "@once-ui-system/core";

interface Skill {
  name: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "database" | "tools" | "cloud";
  icon?: string;
  description?: string;
}

interface SkillsShowcaseProps {
  skills: Skill[];
  title?: string;
  showProgress?: boolean;
}

export const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({
  skills,
  title = "Technical Skills",
  showProgress = true,
}) => {
  const getCategoryColor = (category: Skill["category"]) => {
    switch (category) {
      case "frontend":
        return "brand";
      case "backend":
        return "accent";
      case "database":
        return "info";
      case "tools":
        return "warning";
      case "cloud":
        return "brand";
      default:
        return "neutral";
    }
  };

  const getCategoryIcon = (category: Skill["category"]) => {
    switch (category) {
      case "frontend":
        return "palette";
      case "backend":
        return "server";
      case "database":
        return "database";
      case "tools":
        return "tool";
      case "cloud":
        return "cloud";
      default:
        return "code";
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill["category"], Skill[]>);

  return (
    <Column gap="xl" fillWidth>
      <Heading variant="display-strong-s">{title}</Heading>
      
      <Column gap="l">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <Column key={category} gap="m" className="animate-fade-in-up">
            <Row gap="s" vertical="center">
              <Icon 
                name={getCategoryIcon(category as Skill["category"])} 
                size="s" 
                onBackground="brand-medium"
              />
              <Heading variant="heading-strong-m" style={{ textTransform: "capitalize" }}>
                {category}
              </Heading>
            </Row>
            
            <Row gap="m" wrap>
              {categorySkills.map((skill, index) => (
                <Column 
                  key={skill.name} 
                  gap="xs" 
                  style={{ minWidth: "200px", flex: "1 1 200px" }}
                  className={`animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <Row gap="s" vertical="center" horizontal="between">
                    <Row gap="xs" vertical="center">
                      {skill.icon && <Icon name={skill.icon} size="xs" />}
                      <Text variant="label-strong-s">{skill.name}</Text>
                    </Row>
                    {showProgress && (
                      <Text variant="label-default-xs" onBackground="neutral-weak">
                        {skill.level}%
                      </Text>
                    )}
                  </Row>
                  
                  {showProgress && (
                    <Row 
                      fillWidth 
                      height="4" 
                      background="neutral-alpha-weak" 
                      radius="full"
                      style={{ overflow: "hidden" }}
                    >
                      <Row 
                        height="4" 
                        background="brand-medium"
                        radius="full"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: "width 0.8s ease-out"
                        }}
                      />
                    </Row>
                  )}
                  
                  {skill.description && (
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  )}
                </Column>
              ))}
            </Row>
          </Column>
        ))}
      </Column>
    </Column>
  );
};

export default SkillsShowcase;
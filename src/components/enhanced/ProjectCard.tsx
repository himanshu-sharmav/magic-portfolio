"use client";

import React from "react";
import {
  Card,
  Column,
  Row,
  Text,
  Heading,
  Tag,
  SmartLink,
  Media,
  Icon,
} from "@once-ui-system/core";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  href: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  status?: "completed" | "in-progress" | "featured";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags = [],
  href,
  metrics = [],
  status = "completed",
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "featured":
        return "brand";
      case "in-progress":
        return "accent";
      default:
        return "neutral";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "featured":
        return "Featured";
      case "in-progress":
        return "In Progress";
      default:
        return "Completed";
    }
  };

  return (
    <SmartLink href={href} style={{ textDecoration: "none" }}>
      <Card
        className="portfolio-card animate-fade-in-up"
        padding="l"
        radius="l"
        border="neutral-medium"
        background="surface"
        style={{
          height: "100%",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Status Badge */}
        <Row
          position="absolute"
          style={{ top: "16px", right: "16px", zIndex: 2 }}
        >
          <Tag size="s" variant={getStatusColor()}>
            {getStatusLabel()}
          </Tag>
        </Row>

        <Column gap="m" fillWidth>
          {/* Project Image */}
          {image && (
            <Media
              src={image}
              alt={title}
              aspectRatio="16 / 9"
              radius="m"
              style={{
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
          )}

          {/* Project Content */}
          <Column gap="s">
            <Row gap="s" vertical="center" wrap>
              <Heading variant="heading-strong-m" style={{ flex: 1 }}>
                {title}
              </Heading>
              <Icon name="arrowUpRight" size="s" />
            </Row>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </Text>
          </Column>

          {/* Metrics */}
          {metrics.length > 0 && (
            <Row gap="l" wrap>
              {metrics.map((metric, index) => (
                <Column key={index} gap="xs">
                  <Text variant="heading-strong-s" onBackground="brand-medium">
                    {metric.value}
                  </Text>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {metric.label}
                  </Text>
                </Column>
              ))}
            </Row>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <Row gap="xs" wrap>
              {tags.slice(0, 4).map((tag, index) => (
                <Tag key={index} size="s" variant="neutral">
                  {tag}
                </Tag>
              ))}
              {tags.length > 4 && (
                <Tag size="s" variant="neutral">
                  +{tags.length - 4}
                </Tag>
              )}
            </Row>
          )}
        </Column>
      </Card>
    </SmartLink>
  );
};

export default ProjectCard;
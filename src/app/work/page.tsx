import { Column, Heading, Media, Meta, Row, Schema, Text, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import type React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/images/og/home.jpg`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>

      {/* Work Experience Section */}
      {about.work.experiences && about.work.experiences.length > 0 && (
        <Column fillWidth gap="l">
          {about.work.experiences.map((experience, index) => (
            <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
              <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                <Row gap="12" vertical="center">
                  {experience.images && experience.images.length > 0 && (
                    <Media
                      radius="s"
                      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                      alt={experience.images[0].alt}
                      src={experience.images[0].src}
                    />
                  )}
                  {experience.link ? (
                    <SmartLink href={experience.link}>
                      <Text variant="heading-strong-l">
                        {experience.company}
                      </Text>
                    </SmartLink>
                  ) : (
                    <Text variant="heading-strong-l">
                      {experience.company}
                    </Text>
                  )}
                </Row>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {experience.timeframe}
                </Text>
              </Row>
              <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                {experience.role}
              </Text>
              <Column as="ul" gap="16" marginBottom="m">
                {experience.achievements.map(
                  (achievement: React.ReactNode, index: number) => (
                    <Text
                      as="li"
                      variant="body-default-m"
                      key={`${experience.company}-${index}`}
                    >
                      {achievement}
                    </Text>
                  ),
                )}
              </Column>
              {/* Company work images */}
              {experience.images && experience.images.length > 1 && (
                <Row fillWidth paddingTop="m" gap="12" wrap>
                  {experience.images.slice(1).map((image) => (
                    <Row
                      key={`${experience.company}-${image.src}`}
                      border="neutral-medium"
                      radius="m"
                      style={{ maxWidth: '300px' }}
                    >
                      <Media
                        enlarge
                        radius="m"
                        alt={image.alt}
                        src={image.src}
                      />
                    </Row>
                  ))}
                </Row>
              )}
            </Column>
          ))}
        </Column>
      )}
    </Column>
  );
}

import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
        </Section>
        <Section>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-sub-heading</Heading>
          <Heading>Sub-sub-sub-sub-heading</Heading>
        </Section>
      </Section>
      <Section>
        <Heading>Posts</Heading>
        <RecentPosts />
      </Section>
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post body="...those pasters de nata!" title="Flavors of Lisbon" />
      <Post body="I loved it!" title="Buenos Aires in the rhythm of tango" />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}

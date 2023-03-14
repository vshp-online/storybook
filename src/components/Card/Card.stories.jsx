import { React, useState } from "react";
import { MemoryRouter, Link } from "react-router-dom";

import { Card } from "./Card";

import { Button } from "../Button/Button";
import { Progress } from "../Progress/Progress";

// import CardDoc from "./Card-Doc.mdx";

export default {
  title: "Card",
  component: Card,
  parameters: {
    docs: {
      // page: CardDoc,
    },
  },
};

const deleteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path d="M25.8,14.2c-0.5-0.5-1.4-0.5-1.9,0L20,18.1l-3.9-3.9c-0.5-0.5-1.4-0.5-1.9,0.1c-0.5,0.5-0.5,1.3,0,1.8l3.9,3.9l-3.9,3.9c-0.5,0.5-0.5,1.4,0.1,1.9c0.5,0.5,1.3,0.5,1.8,0l3.9-3.9l3.9,3.9c0.5,0.5,1.4,0.5,1.9,0c0.5-0.5,0.5-1.4,0-1.9l0,0L21.9,20l3.9-3.9C26.3,15.6,26.3,14.7,25.8,14.2z" />
  </svg>
);

const Template = (args) => (
  <MemoryRouter>
    <div
      style={{
        maxWidth: "380px",
      }}
    >
      <Card {...args}>
        <Card.Row>
          <Card.Title>Title</Card.Title>
          <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Row>
      </Card>
    </div>
  </MemoryRouter>
);

const TemplateWithProgress = (args) => (
  <MemoryRouter>
    <div
      style={{
        maxWidth: "380px",
      }}
    >
      <Card {...args}>
        <Card.Row>
          <Card.Title>Title</Card.Title>
          <Progress progress={40} />
        </Card.Row>
        <Card.Row>
          <Card.Title>Title</Card.Title>
          <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Row>
      </Card>
    </div>
  </MemoryRouter>
);

const TemplateDelete = (args) => {
  const [isDelete, toggleDelete] = useState(false);
  const btnConfirm = (
    <Button className="card__delete-backdrop-btn" onClick={() => toggleDelete(false)}>
      Да
    </Button>
  );
  const btnCancel = (
    <Button className="card__delete-backdrop-btn" onClick={() => toggleDelete(false)}>
      Нет
    </Button>
  );

  return (
    <MemoryRouter>
      <div
        style={{
          maxWidth: "380px",
        }}
      >
        <Card {...args}>
          <Card.Delete
            isDelete={isDelete}
            btnDelete={
              <Button className="card__delete" size={"small"} icon={true} onClick={() => toggleDelete(true)}>
                {deleteIcon}
              </Button>
            }
            btnConfirm={btnConfirm}
            btnCancel={btnCancel}
          />
          <Card.Row>
            <Card.Title>Title</Card.Title>
            <Card.Subtitle>Subtitle</Card.Subtitle>
          </Card.Row>
        </Card>
      </div>
    </MemoryRouter>
  );
};

function CardLink({ children, ...props }) {
  return (
    <Link to="/ff" {...props}>
      {children}
    </Link>
  );
}

export const Default = Template.bind({});
Default.args = {
  cover: <img alt="example" src="https://picsum.photos/id/1/400/400" />,
  title: "Cover Title",
  link: CardLink,
};

export const CardWithProgress = TemplateWithProgress.bind({});
CardWithProgress.args = {
  cover: <img alt="example" src="https://picsum.photos/id/1/400/400" />,
  title: "Cover Title",
  link: CardLink,
};

export const CardWithDeleteBtn = TemplateDelete.bind({});
CardWithDeleteBtn.args = {
  cover: <img alt="example" src="https://picsum.photos/id/1/400/400" />,
  title: "Cover Title",
  link: CardLink,
};

export const CardNoLink = Template.bind({});
CardNoLink.args = {
  cover: <img alt="example" src="https://picsum.photos/id/1/400/400" />,
  title: "Cover Title",
};

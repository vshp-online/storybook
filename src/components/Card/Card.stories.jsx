import { React, useState } from "react";
import { MemoryRouter } from "react-router-dom";

import { Card } from "./Card";
import { CardRow } from "./CardRow";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";
import { CardDelete } from "./CardDelete";

import { Button } from "../Button/Button";

export default {
  title: "Card",
  component: Card,
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
        "max-width": "380px",
      }}
    >
      <Card {...args}>
        <CardRow>
          <CardTitle>Уровень подготовки</CardTitle>
          <CardSubtitle>Бакалавриат</CardSubtitle>
        </CardRow>
      </Card>
    </div>
  </MemoryRouter>
);

const TemplateDelete = (args) => {
  const [isDelete, toggleDelete] = useState(false);
  const btnConfirm = (
    <Button className="card__delete-btn" onClick={() => toggleDelete(false)}>
      Да
    </Button>
  );
  const btnCancel = (
    <Button className="card__delete-btn" onClick={() => toggleDelete(false)}>
      Нет
    </Button>
  );

  return (
    <MemoryRouter>
      <div
        style={{
          "max-width": "380px",
        }}
      >
        <Card {...args}>
          <CardDelete
            isDelete={isDelete}
            btnDelete={
              <Button
                className="card__delete"
                size={"small"}
                icon={true}
                onClick={() => toggleDelete(true)}
              >
                {deleteIcon}
              </Button>
            }
            btnConfirm={btnConfirm}
            btnCancel={btnCancel}
          ></CardDelete>
          <CardRow>
            <CardTitle>Уровень подготовки</CardTitle>
            <CardSubtitle>Бакалавриат</CardSubtitle>
          </CardRow>
        </Card>
      </div>
    </MemoryRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  cover: (
    <img
      alt="example"
      src="https://vshp.online/system/study/program/14/preview_stanley-dai-242205-unsplash.jpg"
    />
  ),
  title: "Менеджмент",
  link: "https://my.vshp.online/programs/14",
};

export const CardWithDeleteBtn = TemplateDelete.bind({});
CardWithDeleteBtn.args = {
  cover: (
    <img
      alt="example"
      src="https://vshp.online/system/study/program/14/preview_stanley-dai-242205-unsplash.jpg"
    />
  ),
  title: "Менеджмент",
  link: "https://my.vshp.online/programs/14",
};

import React from "react";

import { Card } from "./Card";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => (
  <MemoryRouter>
    <div style={{ "max-width": "380px" }}>
      <Card {...args}>
        <div className="programs-feed__item-info-tag">
          <div className="programs-feed__item-info-tag-name">
            Уровень подготовки
          </div>
          <div className="programs-feed__item-info-tag-value">Бакалавриат</div>
        </div>
      </Card>
    </div>
  </MemoryRouter>
);

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

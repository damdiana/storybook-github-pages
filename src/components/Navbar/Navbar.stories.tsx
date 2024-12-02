import { StoryFn, Meta } from "@storybook/react";
import { Navbar as NavbarComponent } from "./Navbar";

export default {
  title: "navbar/NavbarComponent",
  component: NavbarComponent,
} as Meta<typeof NavbarComponent>;

const Template: StoryFn<typeof NavbarComponent> = () => <NavbarComponent />;

export const Navbar = Template.bind({});
Navbar.args = {};

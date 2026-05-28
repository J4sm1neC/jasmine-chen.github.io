import type { Route } from "./+types/home";
import {HomePage} from "../components/homepage"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jasmine Chen's Website" },
    { name: "description", content: "Welcome to Jasmine's personal website!" },
  ];
}

export default function Home() {
  return < HomePage/>;
}

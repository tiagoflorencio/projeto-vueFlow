import { MarkerType, Position } from "@vue-flow/core";
import ContentCard from "../components/ContentCard.vue";

const defaultNodeStyle = {
  border: "1px solid #10b981",
  borderRadius: "99px",
};

export const initialElements = [
  {
    id: "1",
    type: "toolbar",
    label: "toolbar top",
    data: { toolbarPosition: Position.Top, teste: "informações" },
    position: { x: 0, y: 50 },
    style: defaultNodeStyle,
  },
  {
    id: "2",
    type: "toolbar",
    label: "toolbar right",
    data: { toolbarPosition: Position.Top, teste: "informações" },
    position: { x: 250, y: 0 },
    style: defaultNodeStyle,
    teste: "informações",
  },
  {
    id: "3",
    type: "toolbar",
    label: "toolbar bottom",
    data: { toolbarPosition: Position.Top, teste: "informações" },
    position: { x: 250, y: 100 },
    style: defaultNodeStyle,
    teste: "informações",
  },
  {
    id: "4",
    type: "toolbar",
    label: "toolbar left",
    data: { toolbarPosition: Position.Top, teste: "informações" },
    position: { x: 500, y: 150 },
    style: defaultNodeStyle,
    teste: "informações",
  },
  {
    id: "5",
    type: "toolbar",
    label: "toolbar always open",
    data: { toolbarPosition: Position.Top, teste: "informações" },

    position: { x: 750, y: 50 },
    style: defaultNodeStyle,
    teste: "informações",
  },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", markerEnd: MarkerType.Arrow },

  { id: "e3-4", source: "3", target: "4" },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    style: { stroke: "orange" },
    labelBgStyle: { fill: "orange" },
  },
];

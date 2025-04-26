import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

export const SLIDE_IN_OUT_ANIMATION = [
  trigger("slideInOut", [
    state(
      "void",
      style({
        height: "0",
        opacity: 0,
      })
    ),
    state(
      "*",
      style({
        height: "*",
        opacity: 1,
      })
    ),
    transition(":enter", [
      style({ height: "0", opacity: 0 }),
      animate("300ms ease-out", style({ height: "*", opacity: 1 })),
    ]),
    transition(":leave", [
      animate("300ms ease-in", style({ height: "0", opacity: 0 })),
    ]),
  ]),
];

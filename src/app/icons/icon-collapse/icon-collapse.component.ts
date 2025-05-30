import { Component } from "@angular/core";

@Component({
  selector: "app-icon-collapse",
  template: `<svg
    width="20px"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <defs>
      <style>
        .cls-1 {
          fill: #fff;
          opacity: 0;
        }
      </style>
    </defs>
    <title>collapse</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="collapse">
        <g id="collapse-2" data-name="collapse">
          <rect
            class="cls-1"
            width="24"
            height="24"
            transform="translate(24 24) rotate(180)"
          />
          <path
            class="cls-2"
            d="M19,9H16.42l3.29-3.29a1,1,0,1,0-1.42-1.42L15,7.57V5a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l0,5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2Z"
          />
          <path
            class="cls-2"
            d="M10,13,5,13H5a1,1,0,0,0,0,2H7.57L4.29,18.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,16.42V19a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13Z"
          />
        </g>
      </g>
    </g>
  </svg> `,
  standalone: true,
})
export class IconCollapseComponent {}

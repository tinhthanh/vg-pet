import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-expand",
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
    <title>expand</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="expand">
        <g id="expand-2" data-name="expand">
          <rect
            class="cls-1"
            width="24"
            height="24"
            transform="translate(24 24) rotate(180)"
          />
          <path
            class="cls-2"
            d="M20,5a1,1,0,0,0-1-1L14,4h0a1,1,0,0,0,0,2h2.57L13.29,9.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.42V10a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1Z"
          />
          <path
            class="cls-2"
            d="M10.71,13.29a1,1,0,0,0-1.42,0L6,16.57V14a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1l0,5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H7.42l3.29-3.29A1,1,0,0,0,10.71,13.29Z"
          />
        </g>
      </g>
    </g>
  </svg>`,
  standalone: true,
})
export class IconExpandComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

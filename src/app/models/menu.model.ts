export class MenusModel {
  menus: MenuModel[] = [];

  constructor(menus?: any[]) {
    if (menus) {
      this.menus = (menus || []).map((menu: any) => new MenuModel(menu));
    }
  }
}

export class MenuModel {
  icon: string = "";
  title: string = "";
  open: boolean = false;
  selected: boolean = false;
  disabled: boolean = false;
  routerLink: string[] = [];

  constructor(menu?: any) {
    if (menu) {
      this.icon = menu.icon || "";
      this.title = menu.title || "";
      this.open = menu.open || false;
      this.selected = menu.selected || false;
      this.disabled = menu.disabled || false;
      this.routerLink = (menu.routerLink || []).map((item: any) => item);
    }
  }
}

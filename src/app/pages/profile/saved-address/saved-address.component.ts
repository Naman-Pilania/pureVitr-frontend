import { Component } from '@angular/core';
import { TextareaComponent } from '../../../components/utility/form/textarea/textarea.component';
import { MatIcon } from '@angular/material/icon';
import { AddressCardComponent } from '../../../components/layout/cards/address-card/address-card.component';
import { SidePanelComponent } from "../../../components/utility/side-panel/side-panel.component";
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { NgIf, NgClass } from '@angular/common';
import { AddAddressComponent } from "../add-address/add-address.component";

@Component({
  selector: 'app-saved-address',
  standalone: true,
  imports: [
    TextareaComponent,
    MatIcon,
    AddressCardComponent,
    SidePanelComponent,
    NgIf,
    NgClass,
    AddAddressComponent
],
  templateUrl: './saved-address.component.html',
  styleUrl: './saved-address.component.scss'
})
export class SavedAddressComponent {
  sidepanel: boolean = false;
  constructor(private dialog: MatDialog) {}

  openPanel() {
    this.dialog.open(AddAddressComponent, {
      height: '100vh',
      position: { right: '0', top: '0' },
      panelClass: 'side-panel-dialog',
    });
    this.sidepanel = !this.sidepanel
  }

}

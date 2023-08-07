import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Country } from "src/app/models/country.model";
import { DropdownValue } from "src/app/models/drop-down.model";
import { Region } from "src/app/models/region.model";


@Component({
  selector: "app-dropdown",
  templateUrl: "./drop-down.component.html",
  styleUrls: ["./drop-down.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  @Input() label!: string;
  @Input() optionsList!: Array<Region | Country> | null;
  @Input() defaultSelection!: Region | null;
  @Input() disabled!: boolean;
  @Output() optionChange = new EventEmitter<DropdownValue>();

  onOptionChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.optionChange.emit({
      label: this.label,
      value
    });
  }
}

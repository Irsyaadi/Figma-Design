import { Component } from '@angular/core';

@Component({
  selector: 'app-select-pages',
  templateUrl: './select-pages.component.html'
})
export class SelectPagesComponent {
  pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  selected: string[] = [];

  get allSelected(): boolean {
    return this.selected.length === this.pages.length;
  }

  toggleAll() {
    this.selected = this.allSelected ? [] : [...this.pages];
  }

  togglePage(page: string) {
    this.selected = this.selected.includes(page)
      ? this.selected.filter(p => p !== page)
      : [...this.selected, page];
  }

  handleDone() {
    alert(
      this.selected.length
        ? `Selected: ${this.selected.join(', ')}`
        : 'No pages selected'
    );
  }
}

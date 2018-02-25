import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {


  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() {
  }

  @HostListener('window:drop', ['$event'])
  onDrop($event) {
    $event.preventDefault(); // Prevent browser from opening file in tab
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
    return false;
  }

  @HostListener('window:dragover', ['$event'])
  onDragOver($event) {
    $event.stopPropagation();
    $event.preventDefault();
    this.hovered.emit(true);
    return false;
  }

  @HostListener('window:dragleave', ['$event'])
  onDragLeave($event) {
    $event.stopPropagation();
    $event.preventDefault();
    this.hovered.emit(false);
  }

}

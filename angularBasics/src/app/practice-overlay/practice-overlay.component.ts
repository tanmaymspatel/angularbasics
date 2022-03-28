import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { FormOverlayComponent } from '../practice-overlay/form-overlay/form-overlay.component';

@Component({
  selector: 'app-practice-overlay',
  templateUrl: './practice-overlay.component.html',
  styleUrls: ['./practice-overlay.component.scss']
})
export class PracticeOverlayComponent implements OnInit {

  constructor(private overlay : Overlay) { }

  ngOnInit(): void {
  }

  public openOverlay(){
    let config = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });

    let overlayRef = this.overlay.create(config);
    overlayRef.attach(new ComponentPortal(FormOverlayComponent));
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}



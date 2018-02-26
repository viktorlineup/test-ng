import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Component} from "@angular/core";

@Component({
    selector: 'ngbd-modal-content',
    template: `
        <div class="modal-header">
            <h4 class="modal-title"></h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Update was successful</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
        </div>
    `
})
export class ConfigurationModalContentComponent {
    constructor(public activeModal: NgbActiveModal) {}
}

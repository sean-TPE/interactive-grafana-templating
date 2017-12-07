import {PanelCtrl} from 'app/plugins/sdk';

export class InteractiveGrafanaTemplating extends PanelCtrl {
    constructor($scope, $injector) {
        super($scope, $injector);

        this.setSubtitle();
    }

    setSubtitle() {
        this.subtitle = 'Have a great day!';
    }
}

InteractiveGrafanaTemplating.templateUrl = 'module.html';
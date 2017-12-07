import {PanelCtrl} from 'app/plugins/sdk';

export class InteractiveGrafanaTemplating extends PanelCtrl {
    constructor($scope, $injector, variableSrv) {
        super($scope, $injector);

        this.setSubtitle();

        $scope.templating = variableSrv.variables;
        this.chosenOne = {};
        this.newValue = "";
        let that = this;

        $scope.setCurrentOption = function () {
            if (!that.newValue) {
                alert('Ooooops!');
                return;
            }

            let isExisting = false;
            for (let i = 0; i < that.chosenOne.options.length; i++) {
                if (that.chosenOne.options[i].value === String(that.newValue)) {
                    isExisting = true;
                    break;
                }
            }

            if (isExisting) {
                setCurrentOption(that.newValue);
            } else {
                createNewOption(that.newValue);
            }
        }

        function setCurrentOption(input) {
            let index = -1;
            for (let i = 0; i < that.chosenOne.options.length; i++) {
                if (that.chosenOne.options[i].value === String(input)) {
                    that.chosenOne.options[i].selected = true;
                    index = i;
                } else {
                    that.chosenOne.options[i].selected = false;
                }
            }

            if (index < 0) {
                alert('Error!');
                return;
            }

            that.chosenOne.current.text = that.chosenOne.options[index].text;
            that.chosenOne.current.value = that.chosenOne.options[index].value;
            variableSrv.variableUpdated(that.chosenOne, true);
        }

        function createNewOption(input) {
            let newOption = {};
            newOption.text = String(input);
            newOption.value = String(input);
            newOption.selected = true;

            for (let i = 0; i < that.chosenOne.options.length; i++) {
                that.chosenOne.options[i].selected = false;
            }

            that.chosenOne.current.text = newOption.text;
            that.chosenOne.current.value = newOption.value;
            that.chosenOne.query += "," + String(input);
            that.chosenOne.options.push(newOption);
            variableSrv.variableUpdated(that.chosenOne, true);
        }
    }

    setSubtitle() {
        this.subtitle = 'Have a great day!';
    }
}

InteractiveGrafanaTemplating.templateUrl = 'module.html';
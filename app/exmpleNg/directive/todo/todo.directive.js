import template from './todo.html';
import controller from './todo.controller.js';

var module_name = "todo_module";

export default class Todo {
    constructor($interval) {
        this.template = template;
        this.restrict = 'AE';
        this.controller = controller;
        this.controllerAs = 'td';
        this.$interval = $interval;
    }
    compile(el) {

    }
    link(scope, element) {

    }

    static directiveFactory($interval) {
        Todo.instance = new Todo($interval);
        return Todo.instance;
    }

}

Todo.directiveFactory.$inject = ['$interval'];

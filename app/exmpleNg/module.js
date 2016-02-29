import angular from "angular";
import todoDirective from './directive/todo/todo.directive'

export default angular.module('demoModule', [])
						.directive('todoExample',todoDirective.directiveFactory)

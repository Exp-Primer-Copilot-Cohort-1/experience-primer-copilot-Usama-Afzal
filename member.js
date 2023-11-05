function skillsMember(){
    return{
        restrict: 'E',
        templateURL: 'modules/skilsviews/member.html',
        controller: 'SkillsMemberController',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member:'='
        }

};
}
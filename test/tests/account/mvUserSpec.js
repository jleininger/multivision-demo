describe('mvUser', function() {
   beforeEach(module('app'));

    describe('isAdmin', function() {
       it('Should return false if the roles of the array does not have an admin entry', inject(function(mvUser) {
           var user = new mvUser();
           user.roles = ['not admin'];
           expect(user.isAdmin()).to.be.falsey;
       }));

        it('Should return true if the roles of the array does have an admin entry', inject(function(mvUser) {
            var user = new mvUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        }));
    });
});
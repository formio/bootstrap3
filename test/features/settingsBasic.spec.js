module.exports = function (actions) {
  describe('Settings',function(){
    describe('Basic Plan > Environment Settings',function(){
      actions.logout();
      actions.enterTextInField('.login-container #email','automated@tests');
      actions.enterTextInField('.login-container #password','password');
      actions.clickOnElementWithText('LOG IN');
      actions.iAmLoggedIn();
      actions.waitForActionToComplete(2000);
      actions.goToPage('#/profile/payment/view');
      actions.clickOnElementWithText('Change Credit Card');
      actions.enterTextInField('#cardholderName','Test');
      actions.enterTextInField('#ccNumber','4111111111111111');
      actions.enterTextInField('#securityCode','411');
      actions.clickOnClass('#form-group-ccExpiryMonth');
      actions.clickOnElementWithText('01');
      actions.clickOnClass('#form-group-ccExpiryYear');
      actions.clickOnElementWithText('25');
      actions.clickOnClass('#submit');
      actions.waitForActionToComplete(2000);
      actions.goToPage('#/');
      actions.clickOnElementWithText('New Project');
      actions.enterTextInField('#title','basicProject');
      actions.clickOnElementWithText(' Create Project');
      actions.clickOnElementWithText('Trial');
      actions.upgradeToPlan("Basic");
      actions.clickOnElementWithText(' Confirm Billing Change');
      actions.waitForActionToComplete(2000);
      actions.enableAngular(false);
      actions.clickOnElementWithText('Settings');
      actions.checkElementIsDisabled('//*[@id="form-group-title"]/input');
      actions.checkElementIsDisabled('//*[@id="name"]');
      actions.checkElement('//*[@id="protect"]');
      actions.iSeeElement('i.fa.fa-shield.ng-scope');
      actions.clickOnElementWithText(' Save Stage');
      actions.iSeeText('Project saved.');
      actions.waitForActionToComplete(2000);
      actions.clickOnElementWithText('Forms');
      actions.checkElementWithTextIsDisabled(' New Form');
      actions.checkElementWithTextIsDisabled(' Edit');
      actions.checkElementWithTextIsDisabled(' Actions');
      actions.checkElementWithTextIsDisabled(' Access');
      actions.checkElementWithTextIsNotDisabled(' Use');
      actions.checkElementWithTextIsNotDisabled(' Embed');
      actions.clickOnElementWithText(' Data');
      actions.checkElementWithTextIsNotDisabled('{...} Export JSON');
      actions.checkElementWithTextIsNotDisabled(' Export CSV');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iSeeText('Upgrade your project to a team or commercial plan to enable On-Premise Environments.');
      actions.clickOnElementWithText('API Keys');
      actions.iSeeText('Upgrade your project to a paid plan to use API Keys.');
      actions.clickOnElementWithText('CORS');
      actions.iSeeText('Upgrade your project to a paid plan to enable CORS Settings.');
      actions.clickOnElementWithText('Custom JS and CSS');
      actions.checkingUrlEndsWith('/env/settings/customjscss');
      actions.clickOnElementWithText('Save Settings');
    });
    describe('Basic Plan > Deployment Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.clickOnElementWithText('Staging');
      actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Create Version Tag');
      actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Import Template');
      actions.checkingUrlEndsWith('env/staging/import');
      actions.clickOnElementWithText('Export Template');
      actions.checkingUrlEndsWith('env/staging/export');
    });
    describe('Basic Plan > Integrations Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('PDF Management');
      actions.checkingUrlEndsWith('env/pdf');
      actions.clickOnElementWithText('Integrations');
      actions.checkingUrlEndsWith('env/integrations/info');
      actions.clickOnElementWithText('Email Providers');
      actions.iSeeText('Upgrade your project to a paid plan to access email settings.');
      actions.clickOnElementWithText('File Storage');
      actions.iSeeText('Upgrade your project to a paid plan to access file storage settings.');
      actions.clickOnElementWithText('Data Connections');
      actions.iSeeText('Upgrade your project to a paid plan to access data connection settings.');
      actions.clickOnElementWithText('OAuth');
      actions.iSeeText('Upgrade your project to a paid plan to access OAuth settings.');
    });
    describe('Deleting basicProject',function(){
      actions.clickOnClass('.fa.fa-cog');
      actions.clickOnElementWithText('Delete basicProject Project');
      actions.clickOnElementWithText(' Yes');
      actions.iDonotSeeText('basicProject');
    });
  });
};

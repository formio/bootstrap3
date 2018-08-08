module.exports = function (actions,tags) {
  tags('smoke').describe('Settings',function(){
    describe('Basic Plan > Environment Settings',function(){
      actions.logout();
      actions.iAmLoggedInFor('profileuser3');
      actions.goToPage('#/');
      // actions.clickOnClass('#user-menu');
      // actions.clickOnElementWithText(' Payment Info');
      // actions.checkingUrlEndsWith('#/profile/payment/view');
      // actions.clickOnElementWithText('Add Credit Card');
      // actions.enterTextInField('#cardholderName','Test');
      // actions.enterTextInField('#ccNumber','4111111111111111');
      // actions.enterTextInField('#securityCode','411');
      // actions.clickOnClass('#form-group-ccExpiryMonth');
      // actions.clickOnElementWithText('01');
      // actions.clickOnClass('#form-group-ccExpiryYear');
      // actions.clickOnElementWithText('25');
      // actions.clickOnClass('#submit');
      // actions.waitForActionToComplete(2000);
      // actions.goToPage('#/');
      actions.clickOnElementWithText('New Project');
      actions.enterTextInField('#title','basicProject');
      actions.clickOnElementWithText(' Create Project');
      actions.clickOnElementWithText('Trial');
      actions.upgradeToPlan("Basic");
      actions.clickOnElementWithText(' Confirm Billing Change');
      actions.waitForActionToComplete(2000);
      actions.iSeeTextIn("a.project-plan.label-info","Basic");
      actions.clickOnElementWithText('Overview');
      actions.checkingUrlEndsWith('/overview');
      actions.iSeeText('Submission Requests');
      actions.iSeeText(' / 1,000');
      actions.iSeeText('Emails');
      actions.iSeeText('0 / 100');
      actions.clickOnElementWithText('Forms');
      actions.checkingUrlEndsWith('/form/');
      actions.clickOnElementWithText(' New Form');
      actions.clickOnElementWithText('API Web Form');
      actions.enterTextInField('#title','Test Form');
      actions.dragTo('Text Field', 'formarea');
      actions.iSeeText('Text Field Component');
      actions.enterTextInField('#label', 'Text Field');
      actions.clickOnElementWithText('Save');
      actions.waitForActionToComplete(1000);
      actions.clickOnElementWithText('Create Form');
      actions.clickOnClass('.toast-message');
      actions.clickOnElementWithText(' Revisions');
      actions.iSeeText('Upgrade your Project');
      actions.clickOnElementWithText('Settings');
      actions.checkElementIsDisabled('//*[@id="form-group-title"]/input');
      actions.checkElementIsDisabled('//*[@id="form-group-name"]/div/input');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.iSeeElement('i.fa.fa-shield.ng-scope');
      actions.waitForActionToComplete(1000);
      actions.clickOnElementWithText('Forms');
      actions.checkElementWithTextIsDisabled(' New Form');
      actions.checkElementWithTextIsDisabled(' Edit');
      actions.checkElementWithTextIsDisabled(' Actions');
      actions.checkElementWithTextIsDisabled(' Access');
      actions.checkElementWithTextIsNotDisabled(' Use');
      actions.checkElementWithTextIsNotDisabled(' Embed');
      actions.clickOnElementWithTextIndex(' Use',3);
      actions.iSeeText('Submit Form');
      actions.iSeeText('Text Field');
      actions.enterTextInField('#textField','Test Submission');
      actions.clickOnButton('Submit');
      actions.iSeeTextIn(".toast-message",'New submission added!');
      actions.clickOnElementWithText(' Data');
      actions.checkingUrlEndsWith('/submission');
      actions.checkElementWithTextIsNotDisabled('{...} Export JSON');
      actions.checkElementWithTextIsNotDisabled(' Export CSV');
      actions.iSeeText('Test Submission');
      actions.clickOnElementWithText('Test Submission');
      actions.clickOnElementWithTextIndex(' Edit',1);
      actions.checkingUrlEndsWith('/edit');
      actions.enterTextInField('#textField','Updated Submission');
      actions.clickOnButton('Submit');
      actions.checkingUrlEndsWith('/submission');
      actions.iSeeText('Updated Submission');
      actions.clickOnElementWithText('Updated Submission');
      actions.clickOnElementWithText(' Delete');
      actions.iSeeText('Are you sure you want to delete this submission?');
      actions.clickOnElementWithText('Cancel');
      actions.iDonotSeeText('Are you sure you want to delete this submission?');
      actions.iSeeText('Updated Submission');
      actions.clickOnElementWithText(' Delete');
      actions.iSeeText('Are you sure you want to delete this submission?');
      actions.clickOnElementWithText('Delete');
      actions.iDonotSeeText('Updated Submission');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iSeeText('Upgrade your project to a team or commercial plan to enable On-Premise Environments.');
      actions.clickOnElementWithText('API Keys');
      actions.iSeeText('Upgrade your project to a paid plan to use API Keys.');
      actions.clickOnElementWithText('CORS');
      actions.iSeeText('Upgrade your project to a paid plan to enable CORS Settings.');
      actions.clickOnElementWithText('Security');
      actions.iSeeText('Upgrade your project to a paid plan to enable security settings.');
      actions.clickOnElementWithText('Custom JS and CSS');
      actions.checkingUrlEndsWith('/env/settings/customjscss');
      // actions.enterTextInField('#custom-css','Test CSS');
      // actions.enterTextInField('#custom-js','Test JS');
      // actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');
      // actions.pageReload();
      // actions.waitForActionToComplete(5000);
      // // actions.acceptAlert();
      // actions.checkingUrlEndsWith('/env/settings/customjscss');
      // actions.enterTextInField('#custom-css','');
      // actions.enterTextInField('#custom-js','');
      // actions.clickOnElementWithText('Save Settings');
      // actions.clickOnClass('.toast-message');

    });
    describe('Basic Plan > Deployment Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(2000);
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
      actions.iSeeText('1');
      actions.iSeeText('10');
      // actions.clickOnElementWithText('Change Plan');
      // actions.checkingUrlEndsWith('/billing');
      // actions.iSeeText('$0/month');
      // actions.clickOnElementWithText('Select');
      // actions.iSeeText('$50/month');
      // actions.clickOnElementWithText(' Confirm Billing Change');
      // actions.waitForActionToComplete(4000);
      // actions.iSeeText('$50/month');
      // actions.clickOnElementWithText('Settings');
      // actions.clickOnElementWithText('PDF Management');
      // actions.checkingUrlEndsWith('env/pdf');
      // actions.iSeeText('25');
      // actions.iSeeText('1,000');
      actions.clickOnElementWithText('Integrations');
      actions.checkingUrlEndsWith('env/integrations/info');
      actions.clickOnElementWithText('Email Providers');
      actions.iSeeText('Upgrade your project to a paid plan to access email settings.');
      actions.clickOnElementWithText('File Storage');
      actions.iSeeText('Upgrade your project to a paid plan to access file storage settings.');
      actions.clickOnElementWithText('Data Connections');
      actions.iSeeText('Upgrade your project to a paid plan to access data connection settings.');
      actions.clickOnElementWithText('Authentication');
      actions.checkingUrlEndsWith('env/authentication/info');
      actions.iSeeText('Form.io Auth');
      actions.clickOnElementWithText('Form.io Auth');
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('Login');
      actions.checkingUrlIamOn('https://help.form.io/userguide/actions/#action-authentication');
      actions.goBack();
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('roles');
      actions.switchTab();
      actions.checkingUrlIamOn('https://help.form.io/userguide/roles-and-permissions/');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.clickOnElementWithText('Role Assignment');
      actions.switchTab();
      actions.checkingUrlIamOn('https://help.form.io/userguide/actions/#action-role-assignment');
      actions.closeWindow();
      actions.checkingUrlEndsWith('/env/authentication/formio');
      actions.iSeeText('SAML');
      actions.clickOnElementWithText('SAML');
      actions.checkingUrlEndsWith('/env/authentication/saml');
      actions.iSeeText('Support for SAML authentication is coming soon. Please contact us for more information.');
      actions.iSeeText('LDAP');
      actions.clickOnElementWithText('LDAP');
      actions.checkingUrlEndsWith('/env/authentication/ldap');
      actions.iSeeText('Upgrade your project to team pro or above to configure LDAP settings.');
      actions.clickOnElementWithText('OAuth');
      actions.checkingUrlEndsWith('/env/authentication/oauth');
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

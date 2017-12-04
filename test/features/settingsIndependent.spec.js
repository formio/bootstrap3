module.exports = function (actions) {
  describe('Independent Plan Settings',function(){
    describe('Independent Plan > Environment Settings',function(){
      // actions.logout();
      // actions.iAmLoggedInFor('profileuser1');
      // actions.waitForActionToComplete(2000);
      // actions.goToPage('#/profile/payment/view');
      // actions.clickOnElementWithText('Add Credit Card');
      // actions.enterTextInField('#cardholderName','Test');
      // actions.enterTextInField('#ccNumber','4111111111111111');
      // actions.enterTextInField('#securityCode','411');
      // actions.clickOnClass('#form-group-ccExpiryMonth');
      // actions.clickOnElementWithText('01');
      // actions.clickOnClass('#form-group-ccExpiryYear');
      // actions.clickOnElementWithText('25');
      // actions.clickOnClass('#submit');
      actions.logout();
      actions.enterTextInField('.login-container #email', 'admin@example.com');
      actions.enterTextInField('.login-container #password', 'password');
      actions.clickOnElementWithText('LOG IN');
      actions.iAmLoggedIn();
      actions.goToPage('#/');
      actions.clickOnElementWithText('New Project');
      actions.enterTextInField('#title','independentProject');
      actions.clickOnElementWithText(' Create Project');
      actions.enableAngular(true);
      actions.clickOnElementWithText('Trial');
      actions.upgradeToPlan("Independent");
      actions.clickOnElementWithText(' Confirm Billing Change');
      actions.iSeeTextIn("a.project-plan.label-warning","Independent");
      actions.enableAngular(false);
      actions.clickOnElementWithText('Settings');
      actions.checkElementIsDisabled('//*[@id="form-group-title"]/input');
      actions.checkElementIsNotDisabled('//*[@id="name"]');
      actions.enterTextInField('#name','independentauto');
      actions.clickOnElementWithText(' Save Stage');
      actions.iSeeValueIn('#name','independentauto');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText('User Login');
      actions.iSeeValueIn('#form-group-path','independentauto');
      actions.clickOnElementWithText('Resources');
      actions.clickOnElementWithText(' API');
      actions.iSeeValueIn('.wrap-table-cell','independentauto');
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.iSeeElement('i.fa.fa-shield.ng-scope');
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(1000);
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
      actions.clickOnElementWithText('Resources');
      actions.checkElementWithTextIsDisabled(' New Resource');
      actions.checkElementWithTextIsDisabled(' Edit');
      actions.checkElementWithTextIsDisabled(' Actions');
      actions.checkElementWithTextIsDisabled(' Access');
      actions.checkElementWithTextIsNotDisabled(' Use');
      actions.clickOnElementWithText(' Data');
      actions.checkElementWithTextIsNotDisabled('{...} Export JSON');
      actions.checkElementWithTextIsNotDisabled(' Export CSV');
      actions.clickOnElementWithText('Settings');
      actions.checkElement('//*[@id="protect"]');
      actions.clickOnElementWithText(' Save Stage');
      actions.waitForActionToComplete(1000);
      actions.clickOnElementWithText('On-Premise Environment');
      actions.iSeeText('Upgrade your project to a team or commercial plan to enable On-Premise Environments.');
      actions.clickOnElementWithText('API Keys');
      actions.clickOnElementWithText('Add New Key');
      actions.clickOnClass('.fa.fa-trash');
      actions.clickOnElementWithText('CORS');
      actions.iSeeText('Upgrade your project to a paid plan to enable CORS Settings.');
      actions.clickOnElementWithText('Custom JS and CSS');
      actions.checkingUrlEndsWith('/env/settings/customjscss');
    });
    describe('Independent  Plan > Deployment Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.waitForActionToComplete(1000);
      actions.clickOnElementWithText('Staging');
      actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Create Version Tag');
      actions.iSeeText('Upgrade your project to Enterprise to enable deploying to stages.');
      actions.clickOnElementWithText('Import Template');
      actions.checkingUrlEndsWith('env/staging/import');
      actions.clickOnElementWithText('Export Template');
      actions.checkingUrlEndsWith('env/staging/export');
    });
    describe('Independent  Plan > Integrations Settings',function(){
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.checkingUrlEndsWith('env/integrations/info');
      actions.clickOnElementWithText('Email Providers');
      actions.iSeeText('SMTP Settings');
      actions.iSeeText('SendGrid Settings');
      actions.iSeeText('Mailgun Settings');
      actions.iSeeText('Custom Email Server');
      actions.clickOnElementWithText('SMTP Settings');
      actions.checkElement('//*[@id="smtpSecure"]');
      actions.enterTextInField('#smtpHost','smtpHost');
      actions.enterTextInField('#smtpPort','smtpPort');
      actions.enterTextInField('#smtpUser','smtpUser');
      actions.enterTextInField('#smtpPass','smtpPass');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('SMTP');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('SendGrid Settings');
      actions.enterTextInField('#sendGridPassword','sendGridPassword');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('SendGrid');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('Mailgun Settings');
      actions.enterTextInField('#mailgunAPIKey','mailgunAPIKey');
      actions.enterTextInField('#mailgunDomain','mailgunDomain');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('Mailgun');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('Email Providers');
      actions.clickOnElementWithText('Custom Email Server');
      actions.enterTextInField('#customUrl','customUrl');
      actions.enterTextInField('#customPassword','customPassword');
      actions.clickOnElementWithText('Save Settings');
      actions.clickOnElementWithText('Forms');
      actions.clickOnElementWithText(' Actions');
      actions.clickOnElementWithText('Select an Action');
      actions.clickOnElementWithText('Email');
      actions.clickOnElementWithText(' Add Action');
      actions.clickOnClass('#transport');
      actions.iSeeText('Custom');
      actions.clickOnElementWithText('Settings');
      actions.clickOnElementWithText('Integrations');
      actions.clickOnElementWithText('File Storage');
      actions.iSeeText('Upgrade your project to a paid plan to access file storage settings.');
      actions.clickOnElementWithText('Data Connections');
      actions.clickOnElementWithText('OAuth');
    });
    describe('Deleting independentProject',function(){
      actions.clickOnClass('.fa.fa-cog');
      actions.clickOnElementWithText('Delete independentProject Project');
      actions.clickOnElementWithText(' Yes');
      actions.iDonotSeeText('independentProject');
    });
  });
};

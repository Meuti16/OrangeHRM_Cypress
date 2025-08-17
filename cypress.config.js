require('dotenv').config();
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      base_url: process.env.BASE_URL,
      orangehrm_username: process.env.ORANGEHRM_USERNAME,
      orangehrm_password: process.env.ORANGEHRM_PASSWORD,
      orangehrm_invalid_username: process.env.ORANGEHRM_INVALID_USERNAME,
      orangehrm_invalid_password: process.env.ORANGEHRM_INVALID_PASSWORD,
      orangehrm_new_password: process.env.ORANGEHRM_NEW_PASSWORD,
      orangehrm_valid_employee_name: process.env.ORANGEHRM_VALID_EMPLOYEE_NAME,
      orangehrm_invalid_employee_name: process.env.ORANGEHRM_INVALID_EMPLOYEE_NAME,
      orangehrm_new_employee_name: process.env.ORANGEHRM_NEW_EMPLOYEE_NAME,
      orangehrm_new_account_username: process.env.ORANGEHRM_NEW_ACCOUNT_USERNAME,
      orangehrm_firstname: process.env.ORANGEHRM_FIRSTNAME,
      orangehrm_lastname: process.env.ORANGEHRM_LASTNAME,
      orangehrm_new_firstname: process.env.ORANGEHRM_NEW_FIRSTNAME,
      orangehrm_new_lastname: process.env.ORANGEHRM_NEW_LASTNAME,
      orangehrm_job_title_1: process.env.ORANGEHRM_JOB_TITLE_1,
      orangehrm_job_title_2: process.env.ORANGEHRM_JOB_TITLE_2
    }
  },
};

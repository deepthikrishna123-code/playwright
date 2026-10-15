// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout:40*1000,
 expect: {
  timeout: 60 *1000
  },
  
  reporter:'html',
  fullyParallel:true, //to run the tests in parallel for the browser automatically
  
  projects:[{
    name: 'chromeProject',
   use: {
    browserName:'chromium',
   headless:false, 
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure',
   //viewport:{width:500,height:500},
   permissions:['geolocation','camera','microphones','notifications'],  //to allow permissions for the browser automatically
   geolocation:{latitude: 12.9716, longitude: 77.5946}, //to set the geolocation for the browser automatically 
   ignoreHTTPSErrors:true //to ignore the https errors for the browser automatically
  },
  },
  {
    name: 'firefoxProject',
   use: {
    browserName:'firefox',
   headless:false, 
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure'
    },
  },
  {
    name: 'safariProject',
   use: {
    browserName:'webkit',
   headless:false, 
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure',
   //...devices['iPhone 17 Pro Max']
    },
  },
  ],

 

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


const { defineConfig } = require('cypress')
import * as createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'
const { rm } = require('fs')

export default defineConfig({
	viewportWidth: 1200,
	viewportHeight: 720,
	defaultCommandTimeout: 4000,
	reporter: 'cypress-mochawesome-reporter',
	includeShadowDom: true,
	reporterOptions: {
		reportPageTitle: 'Report',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
		videoOnFailOnly: false,
		reportDir: 'cypress/reports/',
		overwrite: false,
		code: true,
		timeStamp: 'longDate',
		showPassed: true,
		html: true,
		json: false,
		charts: true,
	},
	e2e: {
		specPattern: [
			'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
			//'**/*.feature',
			//'**/*.ts',
			//'cypress/e2e/Naukri/**/*.cy.{js,jsx,ts,tsx}',
		],
		viewportWidth: 1920,
		viewportHeight: 1080,
		async setupNodeEvents(
			on: Cypress.PluginEvents,
			config: Cypress.PluginConfigOptions,
		): Promise<Cypress.PluginConfigOptions> {
			require('cypress-mochawesome-reporter/plugin')(on)
			await addCucumberPreprocessorPlugin(on, config)
			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				}),
			),
				on('task', {
					deleteFolder(folderName: string) {
						return new Promise((resolve, reject) => {
							rm(
								folderName,
								{ maxRetries: 10, recursive: true },
								(err) => {
									if (err) {
										console.error(err)
										reject(err)
									} else {
										resolve(true) // Or any other desired return value
									}
								},
							)
						})
					},
				})
			return config
		},
	},
})

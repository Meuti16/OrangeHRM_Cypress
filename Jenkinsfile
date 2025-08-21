pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Meuti16/OrangeHRM_Cypress.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
              
                sh 'npx cypress run'
            }
        }
        stage('Publish Test Report') {
            steps {
               
                junit 'cypress/results/junit-*.xml'
            }
        }
    }
}
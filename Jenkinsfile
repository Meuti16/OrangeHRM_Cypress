pipeline {
    agent any

    tools {nodejs "Node"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
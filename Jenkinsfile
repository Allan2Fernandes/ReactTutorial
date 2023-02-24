pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                 nodejs(nodeJSInstallationName: 'Node 19.7.0', configId: 'MyNpmrcConfig') {
                    sh 'npm --version'
                 }
            }
        }

        stage('Test') {
            steps {
                // Add test steps here
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here
            }
        }
    }


}